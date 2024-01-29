import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { equipo } from './entity/equipo.entity';
import { Repository} from 'typeorm';


@Injectable()
export class EquipoService {
    constructor(@InjectRepository(equipo) private equipoTable:Repository<equipo>){}

    crear(crearequipo: equipo){
        return this.equipoTable.insert(crearequipo);
    }
    obtener(){
        return this.equipoTable.find({relations:{estado:true,tipo:true}});
    }
    async eliminar(serial: string){
        const Eliminar = await this.equipoTable.delete(serial);
        if (!Eliminar) {
            throw new Error('El equipo no existe.');
        }
        return this.equipoTable.delete(serial);
    }
    async actualizar(serial:string, actualizarequipo:equipo){
        const actualizar = await this.equipoTable.findOne({ where: { serial:serial } });
        if (!actualizar) {
            throw new Error('El equipo no existe.');
        }
        await this.equipoTable.update(serial, actualizarequipo);
        return this.equipoTable.findOne({ where: { serial:serial } });
    }
    async actualizarPorDevolucion(serial:string, actualizarequipo:any){
        await this.equipoTable.createQueryBuilder()
        .update("equipo")
        .set({estado:{id:actualizarequipo}})
        .where("serial = :serial", { serial:serial })
        .execute()
    }
    obtenerBuenos(tipo:number, estado:number){
        return this.equipoTable.find({where:{tipo:{id:tipo}, estado:{id:estado}},relations:{tipo:true, estado:true}});
    }
}
