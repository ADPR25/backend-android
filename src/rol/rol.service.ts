import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { rol } from './Dto/rolDto.dto';

@Injectable()
export class RolService {
    constructor(@InjectRepository(rol) private rolTable:Repository<rol>){}

    crear(crearRol: rol){
        return this.rolTable.insert(crearRol);
    }
    obtener(){
        return this.rolTable.find();
    }
    async eliminar(id: number){
        console.log(id)
        const Eliminar = await this.rolTable.delete(id);
        if (!Eliminar) {
            throw new Error('El Rol no existe.');
        }
        return this.rolTable.delete(id);
    }
    async actualizar(id:number, actualizarRol:rol){
        const actualizar = await this.rolTable.findOne({ where: { id } });
        if (!actualizar) {
            throw new Error('El préstamo no existe.');
        }
        await this.rolTable.update(id, actualizarRol);
        return this.rolTable.findOne({ where: { id } });
    }

}
