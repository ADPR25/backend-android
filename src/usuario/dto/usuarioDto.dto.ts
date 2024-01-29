import { PrimaryColumn } from "typeorm";
import { IsNotEmpty } from 'class-validator';

export class UsuarioDto {

    @IsNotEmpty()
    readonly cedula: number;

    @IsNotEmpty()
    readonly nombre: string;

    @IsNotEmpty()
    readonly apellidos: string;

    @IsNotEmpty()
    readonly telefono: number;

    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly rol: string;

    @IsNotEmpty()
    readonly estado: string;

    @IsNotEmpty()
    readonly contrasena: string;
}
