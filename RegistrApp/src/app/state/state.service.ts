import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  nombre:BehaviorSubject<string> = new BehaviorSubject('')
  private isLogged:BehaviorSubject<boolean> = 
  new BehaviorSubject <boolean>(false);

  get getNombre(){
    return  this.nombre.asObservable();
  }

  set setNombre(nombre: string){
    this.nombre.next(nombre)
  }

   getIsLogged(){
    return this.isLogged.asObservable();
  }

   SetIsLogged(value:boolean){
     this.isLogged.asObservable();
  }
  constructor() { }
}
