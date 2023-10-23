import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { ConsumoapiService } from '../Servconsumo/consumoapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public nombre : string = ''

  constructor(private router:Router, private servicion :StateService, private capi: ConsumoapiService) { 

    this.servicion.getNombre.subscribe((nombre)=> {this.nombre = nombre})

  }
  ngOnInit() {
  }
  
  volverlogin(){
    this.router.navigate(['/pag-principal'])
  }
  irlistListAlumnosPage(){
    this.router.navigate(['/list-alumnos'])
  }

}
