import { IsNotEmpty } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";


export class estado_equipos {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @IsNotEmpty()
    readonly descripcion: string;
}
