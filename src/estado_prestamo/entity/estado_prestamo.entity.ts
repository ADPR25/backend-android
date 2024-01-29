import { prestamos } from 'src/prestamos/entity/prestamos.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity()
export class estado_prestamo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion:string;

    @OneToMany(()=>prestamos,(prestamo)=>prestamo.estado_prestamo)
    estado: prestamos[]; 

}

