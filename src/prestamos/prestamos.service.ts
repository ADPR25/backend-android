import { Injectable, Delete, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { prestamos } from './entity/prestamos.entity';
import { Repository } from 'typeorm';
import { EquipoService } from 'src/equipo/equipo.service';
import { DetallePrestamoService } from 'src/detalle_prestamo/detalle_prestamo.service';
import { detalle_prestamoDto } from 'src/detalle_prestamo/Dto/detalle_prestamoDto.dto';
import { detalle_prestamo } from 'src/detalle_prestamo/entity/detalle_prestamp.entity';
import { prestamosEstadoDto } from './Dto/prestamoEstadoDto.dto';
@Injectable()
export class PrestamosService {
    constructor(
        @Inject(EquipoService) private equipoService:EquipoService,
        @Inject(DetallePrestamoService) private detalleService:DetallePrestamoService,
        @InjectRepository(prestamos)
        private prestamostabla: Repository<prestamos>,
        @InjectRepository(detalle_prestamo) private detalle:Repository<detalle_prestamo>
    ) { }

    async crearprestamo(prestamo) {
        prestamo.fechaInicio = new Date(prestamo.fechaInicio);
        prestamo.fechaFinal = new Date(prestamo.fechaFinal);
    
        var r = await this.prestamostabla.insert(prestamo);
        var prestar = [];
        var cantidadTotal = [];
    
        for (let data of prestamo.detalle) {
            let equipos = await this.equipoService.obtenerBuenos(data.tipo, 1);
            let rDetalle;
    
            var contador = 0;
            for (let d of equipos) {
                if (contador < data.cantidad) {
                    rDetalle = await this.detalleService.obtener(d.serial, prestamo.fechaInicio, prestamo.fechaFinal);
    
                    if (rDetalle.length == 0) {
                        prestar.push(d);
                        contador++;
                    }
                } else {
                    break;
                }
            }
    
            if (contador < data.cantidad) {
                cantidadTotal.push({ contador, equipos });
            }
        }
    
        var id = r.identifiers[0].id;
    
        if (prestar.length == 0) {
            await this.eliminarPrestamo(id); // Usar "await" para asegurar que la eliminación se haya completado antes de continuar
            return "vacio";
        }
    
        for (let data of prestar) {
            let detalle = new detalle_prestamoDto(id, data.serial, prestamo.fechaInicio, prestamo.fechaFinal); // Actualiza la fechaFinal con prestamo.fechaFinal
            var rDetalle = await this.detalle.insert(detalle);
        }               
    
        if (cantidadTotal.length == 0) {
            return "prestar";
        } else {
            return { id, cantidadTotal };
        }
    }
    

    obtener() {
        return this.prestamostabla.find({relations:{usuario:true, estado_prestamo:true}});
    }
    obtenerPorCedula(cedula:number) {
        return this.prestamostabla.createQueryBuilder("prestamo")
            .innerJoinAndSelect("prestamo.usuario", "usuario")
            .innerJoinAndSelect("prestamo.estado_prestamo", "estado_prestamo")
            .where("usuario.cedula = :cedula", { cedula: cedula })
            .getMany();
    }
    obtenerPorEstado(cedula :number,estado : number) {
        return this.prestamostabla.createQueryBuilder("prestamo")
            .innerJoinAndSelect("prestamo.usuario", "usuario")
            .innerJoinAndSelect("prestamo.estado_prestamo", "estado")
            .where("usuario.cedula = :cedula ", { cedula: cedula},)
            .andWhere("estado.id = :estado ", { estado: estado})
            .getMany();
    }
    

    async eliminarPrestamo(id: number) {
        const prestamoAEliminar = await this.prestamostabla.delete(id);
        if (!prestamoAEliminar) {
            throw new Error('El préstamo no existe.');
        }
        return this.prestamostabla.delete(id);
    }
    async actualizarPrestamo(id:number, actualizarPrestamo:prestamosEstadoDto){
        const actualizar = await this.prestamostabla.findOne({ where: { id } });
        if (!actualizar) {
            throw new Error('El prestamo no existe.');
        }
        await this.prestamostabla.update(id, {estado_prestamo:{id:actualizarPrestamo.estado}});
        return this.prestamostabla.findOne({ where: { id } });
    }
    
}
