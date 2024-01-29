import { prestamos } from 'src/prestamos/entity/prestamos.entity';
import { rol } from 'src/rol/entity/rol.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class usuario {

    @PrimaryColumn()
    cedula: number;

    @Column()
    nombre: string;

    @Column()
    contrasena: string;

    @Column()
    apellidos: string;

    @Column({unique:true})
    telefono: string;

    @Column({unique:true})
    email: string;
    
    @ManyToOne(() => rol, (rol) => rol.usuarios, {cascade: true})
    rol: rol;

    @Column()
    estado : string;

    @OneToMany(()=>prestamos,(prestamos)=>prestamos.usuario)
    prestamo:prestamos[];

}

