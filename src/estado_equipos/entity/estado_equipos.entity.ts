
import { equipo } from "src/equipo/entity/equipo.entity";
import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm";

@Entity()
export class estado_equipos{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    descripcion: string;
    
    @OneToMany(()=> equipo,(equipo)=>equipo.estado)
    estado: equipo[];
}