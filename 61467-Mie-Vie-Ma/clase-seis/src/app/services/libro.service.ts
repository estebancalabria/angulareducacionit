import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LibroModel } from '../modelo/libro.model';
import { LibroServiceInterface } from './libro.service.interface';

@Injectable({
  providedIn: 'root'
})
export class LibroService implements LibroServiceInterface {

  constructor() { }

  getAll():Observable<LibroModel[]>{
    return of<LibroModel[]>([
      {id:1, nombre:"(El Principito)", autor:"Antoine de Saint-Exupéry", imagen:"https://picsum.photos/200?1", descripcion:"Un libro muy tiernis"},
      {id:2, nombre:"(Lord of the Rings)", autor:"Tolkien", imagen:"https://picsum.photos/200?2", descripcion:"Una aventura epica"},
      {id:3, nombre:"(Game of Thrones)", autor:"George R.R. Martin", imagen:"https://picsum.photos/200?3", descripcion:"El de la serie"},
      {id:4, nombre:"(Cien Años de Soledad)", autor:"Garcia Marquez", imagen:"https://picsum.photos/200?4", descripcion:"Nunca lo lei"}
    ])
  }
}
