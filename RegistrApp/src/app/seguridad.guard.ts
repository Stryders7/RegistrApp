import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StateService } from './state/state.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadGuard implements CanActivate {
  constructor(
    private StateService:StateService,
    private router:Router
  ){}
  

  canActivate(): boolean {
    let  isLogged:boolean = false;
    this.StateService.userIsLogged().subscribe(
      (logged) => {
        isLogged = logged;
      }
    );
    if(isLogged == false){
    
      this.router.navigate(['/login']);
    }
    return isLogged;
  
}}