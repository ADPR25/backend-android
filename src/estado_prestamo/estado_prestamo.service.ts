import { Injectable, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { estado_prestamo } from './entity/estado_prestamo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class estado_prestamoService {
    constructor(
        @InjectRepository(estado_prestamo)
        private estado_prestamotabla: Repository<estado_prestamo>
    ) { }

    crearprestamo(estado_prestamo) {
        return this.estado_prestamotabla.insert(estado_prestamo);
    }

    obtener_estado() {
        return this.estado_prestamotabla.find();
    }

    async eliminarPrestamo(id: number) {
        const prestamoAEliminar = await this.estado_prestamotabla.delete(id);
        if (!prestamoAEliminar) {
            throw new Error('El préstamo no existe.');
        }
        return this.estado_prestamotabla.delete(id);
    }
    async actualizarEstado(id: number, estado_equiposActualizar:any) {
        const estado = await this.estado_prestamotabla.findOne({ where: { id:id} });
        if (!estado) {
            throw new Error('El préstamo no existe.');
        }
    
        await this.estado_prestamotabla.update(id, estado_equiposActualizar);
        return this.estado_prestamotabla.findOne({ where: { id:id } });
    }

    
}

