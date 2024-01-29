import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { prestamos } from './entity/prestamos.entity';
import { PrestamosService } from './prestamos.service';
import { PrestamosController } from './prestamos.controller';
import { EquipoModule } from 'src/equipo/equipo.module';
import { DetallePrestamoModule } from 'src/detalle_prestamo/detalle_prestamo.module';
import { EquipoService } from 'src/equipo/equipo.service';
import { DetallePrestamoService } from 'src/detalle_prestamo/detalle_prestamo.service';
@Module({
    imports: [TypeOrmModule.forFeature([prestamos]),EquipoModule,DetallePrestamoModule],
    providers: [PrestamosService,EquipoService,DetallePrestamoService],
    controllers: [PrestamosController],
})
export class PrestamosModule {}
