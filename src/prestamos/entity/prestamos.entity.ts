import { ManyToOne, Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { detalle_prestamo } from 'src/detalle_prestamo/entity/detalle_prestamp.entity';
import { estado_prestamo } from 'src/estado_prestamo/entity/estado_prestamo.entity';
import { novedades } from 'src/novedades/entity/novedades.entity';
import { usuario } from 'src/usuario/entities/usuario.entity';

@Entity()
export class prestamos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fechaInicio: Date;

  @Column()
  fechaFinal: Date;

  @ManyToOne(() => usuario, (usuario) => usuario.prestamo)
  usuario: usuario;

  @OneToMany(() => detalle_prestamo, (detalle_prestamo) => detalle_prestamo.prestamo)
  destalle_prestamo: detalle_prestamo[];

  @ManyToOne(() => estado_prestamo, (estado_Prestamo) => estado_Prestamo.estado)
  estado_prestamo: estado_prestamo;

  @OneToMany(() => novedades, (novedades) => novedades.prestamo)
  devolucion: novedades[];
}
