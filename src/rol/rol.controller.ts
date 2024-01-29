import { Controller,Get, Put, Delete,Post,Param, Body } from '@nestjs/common';
import { RolService } from './rol.service';
import { rol } from './Dto/rolDto.dto';

@Controller('rol')
export class RolController {
    constructor(private readonly rolServise:RolService){}

        @Post('/crear')
        crear_rol(@Body() crearRol:rol){
        return this.rolServise.crear(crearRol);
        }
        @Get('/obtener')
        obtener_rol(){
            return this.rolServise.obtener();
        }
        @Delete('/eliminar/:id')
        eliminar_rol(@Param('id') id : number){
            console.log(id)
            return this.rolServise.eliminar(id);
        }
        @Put('/actualizar/:id')
        actualizar_rol(@Param('id') id:number, @Body() actualizarRol: rol){
            return this.rolServise.actualizar(id,actualizarRol);
        }
    
}
