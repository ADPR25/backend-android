import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TipoEquipoService } from './tipo_equipo.service';
import { tipo_equipo } from './Dto/tipo_equipoDto.dto';

@Controller('tipo-equipo')
export class TipoEquipoController {
    constructor(private readonly TipoEquipoService: TipoEquipoService) { }

    @Post('/crear')
    crearEquipo(@Body() crearEquipo: tipo_equipo) {
        return this.TipoEquipoService.crear(crearEquipo);
    }

    @Get('/obtener')
    obtener_estado() {
        return this.TipoEquipoService.obtener();
    }

    @Delete('/eliminar/:id')
    eliminar_tipoEquipo(@Param('id') id: number) {
        return this.TipoEquipoService.eliminar(id);
    }

    @Put('/actualizar/:id')
    actualizar_tipoEquipo(@Param('id') id: number, @Body() actualizar_tipoEquipo: tipo_equipo) {
        return this.TipoEquipoService.actualizar(id, actualizar_tipoEquipo);
    }
}
