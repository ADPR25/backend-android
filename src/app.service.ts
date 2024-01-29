import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { rol } from './rol/entity/rol.entity';
@Injectable()

export class AppService {
  /*  constructor(@InjectRepository(rol) private rolTable:Repository<rol>){}
   iniciar(){
     const nuevoRol: Partial<rol> = {
       descripcion: 'Admin'
   };
     console.log("backend iniciado");
      this.rolTable.insert(nuevoRol);
   } */


}
