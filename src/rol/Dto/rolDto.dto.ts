import { IsNotEmpty } from "class-validator";
import { usuario } from "src/usuario/entities/usuario.entity";
import { PrimaryGeneratedColumn } from "typeorm";

export class rol{

    @PrimaryGeneratedColumn()
    id : number

    @IsNotEmpty()
    descripcion : string

}