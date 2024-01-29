import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NovedadesController } from './novedades.controller';
import { NovedadesService } from './novedades.service';
import { novedades } from './entity/novedades.entity';
import { EquipoModule } from 'src/equipo/equipo.module';
import { EquipoService } from 'src/equipo/equipo.service';

@Module({
  imports: [TypeOrmModule.forFeature([novedades]),EquipoModule],
  controllers: [NovedadesController],
  providers: [NovedadesService,EquipoService]
})
export class NovedadesModule {}
