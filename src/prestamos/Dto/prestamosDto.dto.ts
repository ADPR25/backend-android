import { IsNotEmpty, IsArray, IsNumber } from 'class-validator';
import { detalle_prestamo } from 'src/detalle_prestamo/entity/detalle_prestamp.entity';

export class prestamos {
  @IsNotEmpty()
  fechaInicio: Date;

  @IsNotEmpty()
  fechaFinal: Date;

  @IsNumber()
  usuario: number;

  @IsArray()
  @IsNotEmpty()
  detalle: detalle_prestamo[];

  @IsNotEmpty()
  estado: number;
}
