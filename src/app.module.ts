import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { estado_prestamo } from './estado_prestamo/entity/estado_prestamo.entity';
import { estado_prestamoModule } from './estado_prestamo/estado_prestamo.module';
import { UsuarioModule } from './usuario/usuario.module';
import { usuario } from './usuario/entities/usuario.entity';
import { PrestamosModule } from './prestamos/prestamos.module';
import { prestamos } from './prestamos/entity/prestamos.entity';
import { NovedadesModule } from './novedades/novedades.module';
import { EstadoEquiposModule } from './estado_equipos/estado_equipos.module';
import { estado_equipos } from './estado_equipos/entity/estado_equipos.entity';
import { TipoEquipoModule } from './tipo_equipo/tipo_equipo.module';
import { tipo_equipo } from './tipo_equipo/entity/tipo_equipo.entity';
import { RolModule } from './rol/rol.module';
import {rol} from './rol/entity/rol.entity';
import { DetallePrestamoModule } from './detalle_prestamo/detalle_prestamo.module';
import { detalle_prestamo } from './detalle_prestamo/entity/detalle_prestamp.entity';
import { EquipoModule } from './equipo/equipo.module';
import { equipo } from './equipo/entity/equipo.entity';
import { novedades } from './novedades/entity/novedades.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root1234',
      database: 'biblioteca',
      entities: [estado_prestamo, usuario,prestamos,estado_equipos,equipo,tipo_equipo,rol,detalle_prestamo,novedades],
      synchronize: true,
      connectTimeout: 40000,
      autoLoadEntities: true
    }),
    RolModule,
    EquipoModule,
    NovedadesModule,
    DetallePrestamoModule,
    PrestamosModule,
    TipoEquipoModule,
    estado_equipos,
    estado_prestamoModule,
    UsuarioModule,
    PrestamosModule,
    NovedadesModule,
    EstadoEquiposModule,
    TipoEquipoModule,
    RolModule,
    DetallePrestamoModule,
    EquipoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
