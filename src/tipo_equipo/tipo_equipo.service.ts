import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tipo_equipo } from './Dto/tipo_equipoDto.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TipoEquipoService {

    constructor(
        @InjectRepository(tipo_equipo)
        private tipo_equipotabla: Repository<tipo_equipo>
    ) { }

    crear(tipo_equipo) {
        return this.tipo_equipotabla.insert(tipo_equipo);
    }

    obtener() {
        return this.tipo_equipotabla.find();
    }

    async eliminar(id: number) {
        const prestamoAEliminar = await this.tipo_equipotabla.delete(id);
        if (!prestamoAEliminar) {
            throw new Error('El préstamo no existe.');
        }
        return this.tipo_equipotabla.delete(id);
    }

    async actualizar(id: number, tipo_equipoActualizar: tipo_equipo) {
        const prestamoExistente = await this.tipo_equipotabla.findOne({ where: { id } });
        if (!prestamoExistente) {
            throw new Error('El préstamo no existe.');
        }

        await this.tipo_equipotabla.update(id, tipo_equipoActualizar);
        return this.tipo_equipotabla.findOne({ where: { id } });
    }
}
