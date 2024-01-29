import { Controller,Get,Put,Post,Param,Body,Delete, ParseIntPipe } from '@nestjs/common';
import { DetallePrestamoService } from './detalle_prestamo.service';
import { detalle_prestamoDto } from './Dto/detalle_prestamoDto.dto';
import { detalle_prestamoEliminarDto } from './Dto/detalle_prestamoEliminarDto.dto';

@Controller('detalle-prestamo')
export class DetallePrestamoController {
    constructor(private readonly detallePrestamoServise:DetallePrestamoService){}

    @Post('/crear')
    crear(@Body() crear_detallePrestamo: detalle_prestamoDto){
        return this.detallePrestamoServise.crear(crear_detallePrestamo);
    }
    @Get('/obtenerTodo')
    obtener(){
        return this.detallePrestamoServise.obtenerTodo();
    }
    @Get('/obtenerPorId/:id')
    obtenerPorId(@Param('id')id:number){
        return this.detallePrestamoServise.obtenerPorId(id);
    }
    @Delete('/eliminar/:id')
    eliminar(@Param('id') id : number){
        return this.detallePrestamoServise.eliminar(id);
    }
  /*   @Delete('/eliminar/:id')
    eliminarEspecifico(@Body() prestamo : detalle_prestamoEliminarDto){
        return this.detallePrestamoServise.eliminarEspecifico(prestamo);
    } */
 /*    @Put('/actualizar/:id')
    actualizar(@Param('id') id: number, @Body() actualizarDetallePrestamo: detalle_prestamoDto){
        return this.detallePrestamoServise.actualizar(id,actualizarDetallePrestamo);
    } */
}
