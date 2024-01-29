import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { usuario } from './entities/usuario.entity';
import { loging } from './dto/login.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(usuario)
    private Usuariotab: Repository<usuario>
  ) { }

  crear_usuario(usuario:usuario) {
    return this.Usuariotab.insert(usuario);
  }

  obtener_usuario() {
    return this.Usuariotab.find({relations:{rol:true}});
  }
  
  async obtener_uno(loging: loging) {
    const usuarioEncontrado = await this.Usuariotab.findOne({
      where: { cedula: loging.cedula },
      relations: { rol: true },
    });
  
    if (usuarioEncontrado && usuarioEncontrado.contrasena === loging.contrasena) {
      return usuarioEncontrado;
    }
  
    return null; 
  }

  async eliminar_usuario(cedula: number) {
    const usuario_AEliminar = await this.Usuariotab.delete(cedula);
    if (!usuario_AEliminar) {
      throw new Error('El préstamo no existe.');
    }
    return this.Usuariotab.delete(cedula);
  }

  async Usuario_actualizar(cedula: number, Usuario_Actualizar: usuario) {
    const prestamoExistente = await this.Usuariotab.findOne({ where: { cedula } });
    if (!prestamoExistente) {
      throw new Error('El usuario no existe.');
    }
    await this.Usuariotab.update(cedula, Usuario_Actualizar);
    return this.Usuariotab.findOne({ where: { cedula } });
  }
}
