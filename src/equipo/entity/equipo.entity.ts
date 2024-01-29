import { detalle_prestamo } from "src/detalle_prestamo/entity/detalle_prestamp.entity"
import { estado_equipos } from "src/estado_equipos/entity/estado_equipos.entity"
import { novedades } from "src/novedades/entity/novedades.entity";
import { tipo_equipo } from "src/tipo_equipo/entity/tipo_equipo.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class equipo{


    @PrimaryColumn()
    serial : string;

    @Column()
    referencia : string;

    @Column()
    codigo : string;


    @ManyToOne(()=> estado_equipos,(estado_equipos)=>estado_equipos.estado, {cascade:true, eager:true})
    estado : estado_equipos;

    @ManyToOne(()=> tipo_equipo, (tipo_equipo)=> tipo_equipo.tipo,{
        eager:true
    })
    tipo : tipo_equipo;

    @OneToMany(()=>detalle_prestamo,(detalle_prestamo)=>detalle_prestamo.equipo)
    detalle_prestamo:detalle_prestamo[]; 

    @OneToMany(()=>novedades,(novedades)=>novedades.equipo)
    devolucion:novedades[]; 
}