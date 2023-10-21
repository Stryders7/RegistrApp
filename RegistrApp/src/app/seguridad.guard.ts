import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StateService } from './state/state.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadGuard implements CanActivate {
  constructor(
    private servicio:StateService,
    private router:Router
  ){}
  

  canActivate(): boolean{
    let isLogged:boolean = false;
    this.servicio.getIsLogged().subscribe((value)=>{
      isLogged = value;
      debugger
      if(value){
        this.router.navigateByUrl('/inicio');
        console.log("Paso por aca")
        
      }
    });
    return isLogged;
  } 
  }