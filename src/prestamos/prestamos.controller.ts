import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { prestamos } from './Dto/prestamosDto.dto';
import { prestamosEstadoDto } from './Dto/prestamoEstadoDto.dto';

@Controller('prestamos')
export class PrestamosController {
    constructor(private readonly prestamosService: PrestamosService) { }

    @Post('/crear')
    crearprestamos(@Body() prestamoscrear: prestamos) {
       console.log(prestamoscrear);
       
        return this.prestamosService.crearprestamo(prestamoscrear);

    }

    @Get('/obtener')
    obtenerTodos_prestamo() {
        return this.prestamosService.obtener();
    }
    @Get('/obtenerPorCedula/:cedula')
    obtenerPorCedula(@Param('cedula') cedula:number ){
        return this.prestamosService.obtenerPorCedula(cedula);
    }
    @Get('/obtenerPorEstado/:cedula/:estado')
    obtenerPorestado(@Param('cedula') cedula:number,@Param('estado') estado:number ){
        return this.prestamosService.obtenerPorEstado(cedula,estado);
    }
    @Put('/actualizarEstado/:id')
    actualizarEstado(@Param('id')id:number, @Body()actualizarEstado:prestamosEstadoDto){
        return this.prestamosService.actualizarPrestamo(id,actualizarEstado)
    }
    @Delete('/eliminar/:id')
    eliminarEstadoPrestamo(@Param('id') id: number) {
        return this.prestamosService.eliminarPrestamo(id);
    }

   
}
