import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { novedades } from './Dto/novedadesDto.dto';
import { Repository } from 'typeorm';
import { error } from 'console';
import { EquipoService } from 'src/equipo/equipo.service';

@Injectable()
export class NovedadesService {
    constructor(
        @Inject(EquipoService) private equipoService:EquipoService,
        @InjectRepository(novedades)
    private novedadestabla:Repository<novedades>){}
    
    async crear(devolucion){
        const r = await this.novedadestabla.insert(devolucion);
        for(let d of devolucion)
       { if(d.estado != 1){
            const equipo =await this.equipoService.actualizarPorDevolucion(d.equipo,d.estado)
        }}
        return"Novedades subidas";
    
     }
    obtenerNovedades(){
        return this.novedadestabla.find();
    }
    async eliminarNovedades(id:number){
        const novedadesEliminar = await this.novedadestabla.delete(id);
        if(!novedadesEliminar){
            throw new error('la novedad no existe.')
        }
        return this.novedadestabla.delete(id);
    }
/*     async actualizarNovedades(id: number, novedadesActualizar: novedades){
        const novedadesexistente = await this.novedadestabla.findOne({where:{id:id}});
        if(!novedadesexistente){
            throw new error('la novedad no existe.')
        }
        await this.novedadestabla.update(id,novedadesActualizar);
        return this.novedadestabla.findOne({where: {id:id}});
    } */
}
