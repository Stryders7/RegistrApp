import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';
import { ConsumoapiService } from '../Servconsumo/consumoapi.service';

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
    this.capi.getCharacter().subscribe(
      (data)=>{
        console.log(data);
        this.capi= data;
        localStorage.setItem('character', JSON.stringify(data.result))
      }
    )
  }
  detalle(personajes:any){
    console.log('Episodio seleccionada', personajes)
    localStorage.setItem('character', JSON.stringify(personajes))

    this.router.navigateByUrl('/detalle');
  }
  volverlogin(){
    this.router.navigate(['/pag-principal'])
  }

}
