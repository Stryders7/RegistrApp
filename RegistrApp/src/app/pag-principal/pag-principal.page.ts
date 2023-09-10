import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';

interface login {
  nombre: string,
  contrasena : string
}


@Component({
  selector: 'app-pag-principal',
  templateUrl: './pag-principal.page.html',
  styleUrls: ['./pag-principal.page.scss'],
})
export class PagPrincipalPage implements OnInit {

  formularioIniciar:FormGroup;

  password: string = '';
  passwordVisible: boolean = false;
  constructor(private fb:FormBuilder, private router:Router, private servicion: StateService) {
    
    this.formularioIniciar = this.fb.group(
  {
    nombre: [''],
    contrasena: ['']
    }
    )
   }
  ngOnInit() {
  }

  
  grabarusuario() {


    
    const login = {
      nombre: this.formularioIniciar.get('nombre')?.value,
      contrasena:this.formularioIniciar.get('contraseña')?.value
      
      
    }
    console.log(login)
    this.router.navigate(['inicio'])
    this.servicion.setnombre = login.nombre
  }
  recuperarcontrasena(){

    this.router.navigate(['rcontrasena'])

  }
  contraOcultar() {
    this.passwordVisible = !this.passwordVisible;
}
}