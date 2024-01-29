import { Controller, Post, Get, Delete, Put, Body, Param} from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { equipo } from './entity/equipo.entity';

@Controller('equipo')
export class EquipoController {
    constructor(private readonly equiposervise:EquipoService){}

        @Post('/crear')
        crear_equipo(@Body() crearEquipo:equipo){
        return this.equiposervise.crear(crearEquipo);
        }
        @Get('/obtener')
        obtener_equipo(){
            return this.equiposervise.obtener();
        }
    @Delete('/eliminar/:serial')
    eliminar_equipo(@Param('serial') serial : string) {
        return this.equiposervise.eliminar(serial);
        }
        @Put('/actualizar/:serial')
        actualizar_equipo(@Param('serial') serial:string, @Body() actualizarequipo: equipo){
            return this.equiposervise.actualizar(serial,actualizarequipo);
        }
        @Get('/obtenerBuenos/:tipo/:estado')
        obtener_equipo_buenos(@Param('tipo')tipo:number,@Param('estado')estado:number){
            return this.equiposervise.obtenerBuenos(tipo,estado);
        }
}
