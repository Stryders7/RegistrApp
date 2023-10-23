import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  nombre:BehaviorSubject<string> = new BehaviorSubject('')
  private isLogged:BehaviorSubject<boolean> = new BehaviorSubject <boolean>(false);

  get getNombre(){
    return  this.nombre.asObservable();
  }

  set setNombre(nombre: string){
    this.nombre.next(nombre)
  }

  getisLogged(){
    return this.isLogged.asObservable();
  }

  set setisLogged(dataisLogged:any){
    this.isLogged.next(dataisLogged);
  }

  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  userIsLogged(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  setUserIsLogged(isLogged: boolean): void {
    this.isLoggedSubject.next(isLogged);
  }
}
