import { Module } from '@nestjs/common';
import { DetallePrestamoController } from './detalle_prestamo.controller';
import { DetallePrestamoService } from './detalle_prestamo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { detalle_prestamo } from './entity/detalle_prestamp.entity';

@Module({
  imports:[TypeOrmModule.forFeature([detalle_prestamo])],
  controllers: [DetallePrestamoController],
  providers: [DetallePrestamoService],
  exports:[DetallePrestamoService,TypeOrmModule]
})
export class DetallePrestamoModule {}
