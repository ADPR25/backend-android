import {  Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { estado_equipos } from './Dto/estado_equiposDto.dto';
import { EstadoEquiposService } from './estado_equipos.service';


@Controller('estado-equipos')
export class EstadoEquiposController {
    constructor(private readonly estado_equiposService: EstadoEquiposService) { }

    @Post('/crear')
    crear_estadoEquipo(@Body()estado_equipos: estado_equipos){
        return this.estado_equiposService.crearEstadoEquipo(estado_equipos);
    }
    @Get('/Obtener')
    obtener_estadoEquipo(){
        return this.estado_equiposService.obtener_estado();
    }
    @Delete('/eliminar/:id')
    eliminar_estadoEquipo(@Param('id')id:number){
        return this.estado_equiposService.eliminarEstado(id)
    }
    @Put('/actualizar/:id')
    actualizar_estadoEquipo(@Param('id') id:number, @Body() estado_equipos:estado_equipos){
        return this.estado_equiposService.actualizarEstado(id,estado_equipos);
    }
}
