import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { estado_equipos } from './Dto/estado_equiposDto.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstadoEquiposService {
    constructor( @InjectRepository(estado_equipos)
    private estado_equipostabla: Repository<estado_equipos>
    ) { }
    
    crearEstadoEquipo(estado_equipos : estado_equipos) {
        return this.estado_equipostabla.insert(estado_equipos);
    }
    
    obtener_estado() {
        return this.estado_equipostabla.find();
    }
    
    async eliminarEstado(id: number) {
        const estado = await this.estado_equipostabla.delete(id);
        if (!estado) {
            throw new Error('El préstamo no existe.');
        }
        return this.estado_equipostabla.delete(id);
    }
    
    async actualizarEstado(id: number, estado_equiposActualizar: estado_equipos) {
        const estado = await this.estado_equipostabla.findOne({ where: { id:id} });
        if (!estado) {
            throw new Error('El préstamo no existe.');
        }
    
        await this.estado_equipostabla.update(id, estado_equiposActualizar);
        return this.estado_equipostabla.findOne({ where: { id:id } });
    }
}
