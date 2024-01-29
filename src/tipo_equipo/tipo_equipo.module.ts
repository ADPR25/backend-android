import { Module } from '@nestjs/common';
import { TipoEquipoController } from './tipo_equipo.controller';
import { TipoEquipoService } from './tipo_equipo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tipo_equipo } from './entity/tipo_equipo.entity';
import { equipo } from 'src/equipo/entity/equipo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([tipo_equipo,equipo])],
  controllers: [TipoEquipoController],
  providers: [TipoEquipoService],
  exports : [TypeOrmModule]
})
export class TipoEquipoModule {}
