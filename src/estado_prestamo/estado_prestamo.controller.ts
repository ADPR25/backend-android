import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { estado_prestamoService } from './estado_prestamo.service';
import { estado_prestamo } from './Dto/estado_prestamoDto.dto';

@Controller('estado-prestamo')
export class estado_prestamoController {
    constructor(private readonly estado_prestamoService: estado_prestamoService) { }

    @Post('/crear')
    crearestado_prestamo(@Body() estado_prestamocrear: estado_prestamo) {
        return this.estado_prestamoService.crearprestamo(estado_prestamocrear);
    }

    @Get('/obtener')
    obtenerTodos_prestamo() {
        return this.estado_prestamoService.obtener_estado();
    }

    @Delete('/eliminar/:id')
    eliminarEstadoPrestamo(@Param('id') id: number) {
        return this.estado_prestamoService.eliminarPrestamo(id);
    }
    @Put('/actualizar/:id')
    actualizar_estadoEquipo(@Param('id') id:number, @Body() estado_equipos:estado_prestamo){
        return this.estado_prestamoService.actualizarEstado(id,estado_equipos);
    }

 
}
