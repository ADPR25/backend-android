import { Module } from '@nestjs/common';
import { EstadoEquiposController } from './estado_equipos.controller';
import { EstadoEquiposService } from './estado_equipos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { estado_equipos } from './entity/estado_equipos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([estado_equipos])],
  controllers: [EstadoEquiposController],
  providers: [EstadoEquiposService]
})
export class EstadoEquiposModule {}
