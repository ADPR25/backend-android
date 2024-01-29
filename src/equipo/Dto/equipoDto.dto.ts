import { IsNotEmpty} from "class-validator";

export class equipo{

    @IsNotEmpty()
    estado : number

    @IsNotEmpty()
    tipo : number

    @IsNotEmpty()
    serial : string

    @IsNotEmpty()
    codigo : string

    @IsNotEmpty()
    referencia : string
}