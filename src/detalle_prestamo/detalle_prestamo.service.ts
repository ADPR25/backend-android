import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { detalle_prestamoDto } from './Dto/detalle_prestamoDto.dto';
import { DataSource, Equal, LessThanOrEqual, MoreThanOrEqual, Not, Repository } from 'typeorm';
import { detalle_prestamo } from './entity/detalle_prestamp.entity';
import { detalle_prestamoEliminarDto } from './Dto/detalle_prestamoEliminarDto.dto';


@Injectable()
export class DetallePrestamoService {
    constructor(private dataSource: DataSource, @InjectRepository(detalle_prestamo) private deatallePrestamoTable:Repository<detalle_prestamo> ){}

    crear(crear_detallePrestamo: detalle_prestamoDto){
        return this.deatallePrestamoTable.insert(crear_detallePrestamo);
    }
    async obtener(Id_equipo, fechaInicio, fechaDevolucion){
        console.log('ob',Id_equipo, fechaInicio, fechaDevolucion);
       const r=await this.dataSource.getRepository(detalle_prestamo).findBy([
            
       
        {
            fecha_prestamo:LessThanOrEqual(fechaDevolucion),
            fecha_devolucion:MoreThanOrEqual(fechaInicio),
            equipo:{serial:Equal(Id_equipo)},
            prestamo:{estado_prestamo:Not(Equal(3))}},
            
            {
                fecha_devolucion:LessThanOrEqual(fechaDevolucion),
                fecha_prestamo:MoreThanOrEqual(fechaInicio),
                equipo:{serial:Equal(Id_equipo)},
                prestamo:{estado_prestamo:Not(Equal(3))}}
            
       ]);
        return r;
        
    }
    async obtenerTodo(){
       return await this.deatallePrestamoTable.find({relations:{equipo:true, prestamo:true}});
    }
    async obtenerPorId(id){
        return await this.deatallePrestamoTable.find({where:{prestamo:{
            id:id
        }}});
     }
    async eliminar(id : number){
        const Eliminar = await this.deatallePrestamoTable.delete(id);
        if(!Eliminar){
            throw await Error('el prestamo no existe');
        }
        return this.deatallePrestamoTable.delete(id)
    }
   /*  async eliminarEspecifico( prestamo ){
        for(let r =0; r<= prestamo.prestamo; r ++){
            this.deatallePrestamoTable.delete()
        }
    } */
  /*   async actualizar(id: number, actualizarDetallePrestamo: detalle_prestamoDto){
        const Actualizar = await this.deatallePrestamoTable.findOne({where : {id}})
        if(!Actualizar){
            throw await Error('el prestamo no existe')
        }
        await this.deatallePrestamoTable.update(id,actualizarDetallePrestamo);
        return this.deatallePrestamoTable.findOne({where:{id}});
    } */
}
