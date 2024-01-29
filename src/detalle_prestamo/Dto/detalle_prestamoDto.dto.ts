import { IsNotEmpty, isNotEmpty } from "class-validator";
import { equipo } from "src/equipo/entity/equipo.entity";
import { prestamos } from "src/prestamos/entity/prestamos.entity";

export class detalle_prestamoDto{

    constructor(id_prestamo,serial,fecha_prestamo,fecha_devolucion){
        this.prestamo=id_prestamo;
        this.equipo=serial;
        this.fecha_prestamo=fecha_prestamo;
        this.fecha_devolucion=fecha_devolucion;
    }

    @IsNotEmpty()
    prestamo : prestamos

    @IsNotEmpty()
    equipo : equipo

    @IsNotEmpty()
    fecha_prestamo : Date

    @IsNotEmpty()
    fecha_devolucion : Date
}
