import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public nombre : string = ''
  constructor(private router:Router, private servicion :StateService) { 

    this.servicion.getnombre.subscribe((nombre)=> {this.nombre = nombre})

  }

  ngOnInit() {
  }
  volverlogin(){
    this.router.navigate(['/pag-principal'])
  }

}
