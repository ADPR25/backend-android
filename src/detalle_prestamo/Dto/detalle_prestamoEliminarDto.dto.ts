import { IsNotEmpty } from "class-validator";

export class detalle_prestamoEliminarDto{
    @IsNotEmpty()
    prestamo :[]
}