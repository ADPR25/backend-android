import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { usuario } from './entities/usuario.entity';
import { loging } from './dto/login.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  @Post('/crear') 
  crear_usuario(@Body() usuario: usuario) {
    return this.usuarioService.crear_usuario(usuario);
  }

  @Get('/obtener')
  obtener_usuario() {
    return this.usuarioService.obtener_usuario();
  }
  @Post('/login')
  obtener_uno(@Body() loging:loging) {
    return this.usuarioService.obtener_uno(loging);
  }

  @Delete('/eliminar/:cedula')
  eliminar_usuario(@Param('cedula') cedula: number) {
    return this.usuarioService.eliminar_usuario(cedula);
  }

  @Put('/actualizar/:cedula')
  Usuario_actualizar(@Param('cedula') cedula: number, @Body() Usuario_actualizar: usuario) {
    return this.usuarioService.Usuario_actualizar(cedula, Usuario_actualizar);
  }
}
