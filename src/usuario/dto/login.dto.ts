import { Column } from "typeorm";

export class loging{

    @Column()
    cedula:number;

    @Column()
    contrasena:string;
}