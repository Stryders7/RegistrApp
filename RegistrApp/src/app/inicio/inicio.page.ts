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
  public alumno : any;
  constructor(private router:Router, private servicion :StateService, private capi: ConsumoapiService) { 

    this.servicion.getNombre.subscribe((nombre)=> {this.nombre = nombre})

  }
  ngOnInit() {
    this.capi.getAlumnos().subscribe(
      (data)=>{
        console.log(data);
        this.alumno = data;
        localStorage.setItem('alumnos', JSON.stringify(data.result))
      }
    )
  }
  detalle(alumnos:any){
    console.log('Listado de alumnos', alumnos)
    localStorage.setItem('alumnos', JSON.stringify(alumnos))

    this.router.navigateByUrl('/detalle');
  }
  volverlogin(){
    this.router.navigate(['/pag-principal'])
  }

}
