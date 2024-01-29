import { IsNotEmpty } from "class-validator";

export class prestamosEstadoDto{
    @IsNotEmpty()
    estado:number
}