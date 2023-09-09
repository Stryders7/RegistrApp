import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  nombre:BehaviorSubject<string> = new BehaviorSubject('')

  get getnombre(){
    return  this.nombre.asObservable();
  }

  set setnombre(nombre: string){
    this.nombre.next(nombre)
  }

  constructor() { }
}
