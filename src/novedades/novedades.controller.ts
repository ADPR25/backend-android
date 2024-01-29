import { Body, Controller, Delete, Get, Param, Post, Put  } from '@nestjs/common';
import { novedades } from './Dto/novedadesDto.dto';
import { NovedadesService } from './novedades.service';

@Controller('novedades')
export class NovedadesController {
    constructor(private readonly novedadesServise:NovedadesService){}

    @Post('/crear')
    crear(@Body() devolucion : novedades){
        return this.novedadesServise.crear(devolucion)
    }
    @Get('/obtener')
    obtenerNovedades(){
        return this.novedadesServise.obtenerNovedades()
    }
    @Delete('/elininar/:id')
    eliminarNovedades(@Param('id')id:number){
        return this.novedadesServise.eliminarNovedades(id)
    }
  /*   @Put('/actualizar/:id')
    actualizarNovedades(@Param('id')id:number,@Body()novedadesActualizar:novedades){
        return this.novedadesServise.actualizarNovedades(id,novedadesActualizar)
    } */
}
