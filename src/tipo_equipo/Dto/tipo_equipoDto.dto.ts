import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class tipo_equipo{
      
        @PrimaryGeneratedColumn()
        id:number

        @IsNotEmpty()
        tipo:string
}