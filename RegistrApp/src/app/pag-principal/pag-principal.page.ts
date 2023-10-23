import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';




@Component({
  selector: 'app-pag-principal',
  templateUrl: './pag-principal.page.html',
  styleUrls: ['./pag-principal.page.scss'],
})
export class PagPrincipalPage implements OnInit {

  formularioIniciar:FormGroup;

 
  constructor(private fb:FormBuilder, private router:Router, private StateService: StateService) {
    
    this.formularioIniciar = this.fb.group(
  {
    nombre: ['', Validators.required],
    contrasena: ['', Validators.required]
    }
    );
   }
  ngOnInit() {
  }

  
  
  
  
  grabarusuario() {
    const nombre = {
      nombre: this.formularioIniciar.get('nombre')?.value,
      pass: this.formularioIniciar.get('contrasena')?.value
    }
    if (nombre.nombre.trim() == '' || nombre.pass.trim() == '') {
      console.log('Por favor, completa todos los campos.');
    }
    else {
      console.log(nombre);
      console.log("Usuario iniciado correctamente");
      this.StateService.setNombre = nombre.nombre;
      this.StateService.setUserIsLogged(true);
      this.router.navigate(['/inicio']);
    }
  }
  
  
  
  
  

  recuperarcontrasena(){

    this.router.navigate(['rcontrasena'])

  }

}