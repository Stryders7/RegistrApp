import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
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
      nombre: this.formularioIniciar.get('nombre', )?.value,
      contrasena:this.formularioIniciar.get('contraseña')?.value
      
      
    }
    console.log(login)
    this.router.navigate(['inicio'])
    this.servicion.setnombre = login.nombre
    this.formularioIniciar.reset(login.nombre);
    this.formularioIniciar.reset(login.contrasena);
  }
  recuperarcontrasena(){

    this.router.navigate(['rcontrasena'])

  }
  submitForm() {
    console.log('submitForm() se ha llamado');
    if (this.formularioIniciar.valid) {
      this.router.navigate(['/inicio']);
    }
  }
}