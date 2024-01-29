import { equipo } from "src/equipo/entity/equipo.entity";
import { prestamos } from "src/prestamos/entity/prestamos.entity";
import { Entity, Column,PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class novedades{
      
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    novedad : string; 

    @ManyToOne(()=>equipo,(equipo)=>equipo.devolucion,{cascade:true, eager:true})
    equipo : equipo;
    
    @ManyToOne(()=> prestamos,(prestamos)=>prestamos.devolucion,{cascade:true, eager:true})
    prestamo : prestamos;

    @Column()
    estado : string;
}