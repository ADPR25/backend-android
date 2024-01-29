import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { estado_prestamo } from './entity/estado_prestamo.entity';
import { estado_prestamoService } from './estado_prestamo.service';
import { estado_prestamoController } from './estado_prestamo.controller';
@Module({
    imports: [TypeOrmModule.forFeature([estado_prestamo])],
    providers: [estado_prestamoService],
    controllers: [estado_prestamoController],
})
export class estado_prestamoModule { }