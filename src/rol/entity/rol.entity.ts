import { usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class rol{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    descripcion : string;

    @OneToMany(() => usuario, (usuario) => usuario.rol)
    usuarios: usuario[]; 
}