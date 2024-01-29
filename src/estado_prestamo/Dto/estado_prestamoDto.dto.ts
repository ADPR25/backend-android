import { IsNotEmpty, IsString } from "class-validator";
import { PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export class estado_prestamo{

    @PrimaryGeneratedColumn()
    readonly id: number;

    @IsNotEmpty()
    readonly descripcion: string;

}