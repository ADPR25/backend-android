import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuario } from './entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([usuario])],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule {}
