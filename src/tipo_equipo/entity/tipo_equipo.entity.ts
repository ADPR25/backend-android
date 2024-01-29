import { equipo } from "src/equipo/entity/equipo.entity";
import { prestamos } from "src/prestamos/entity/prestamos.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class tipo_equipo{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    descripcion:string;

    @OneToMany(()=> equipo, (equipo)=>equipo.tipo)
    tipo:equipo[];

 /*    @OneToMany(()=> prestamos, (prestamos)=>prestamos.tipo)
    prestamos:prestamos[]; */
}