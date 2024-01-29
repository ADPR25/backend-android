import { IsNotEmpty, IsString } from "class-validator";
export class novedades{
  @IsNotEmpty()
  equipo : string 

  @IsNotEmpty()
  prestamo : number

  @IsNotEmpty()
  estado : number 

  @IsString()
  novedad : string
}