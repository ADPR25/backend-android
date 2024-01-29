import { Module } from '@nestjs/common';
import { EquipoController } from './equipo.controller';
import { EquipoService } from './equipo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { equipo } from './entity/equipo.entity';
import { tipo_equipo } from 'src/tipo_equipo/entity/tipo_equipo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([equipo,tipo_equipo])],
  controllers: [EquipoController],
  providers: [EquipoService],
  exports: [TypeOrmModule,EquipoService]
})
export class EquipoModule {}
