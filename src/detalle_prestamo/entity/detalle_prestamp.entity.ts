import { equipo } from "src/equipo/entity/equipo.entity"
import { prestamos } from "src/prestamos/entity/prestamos.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class detalle_prestamo{
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne(()=>equipo,(equipo)=>equipo.detalle_prestamo,{
        eager:true
    })
    equipo : equipo;

    @Column()
    fecha_prestamo : Date;

    @Column()
    fecha_devolucion : Date;

    @ManyToOne(()=>prestamos,(prestamos)=>prestamos.destalle_prestamo,{
        eager:true
    })
    prestamo:prestamos;
}