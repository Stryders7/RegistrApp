import { Component, OnInit } from '@angular/core';
import { ConsumoapiService } from '../Servconsumo/consumoapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.page.html',
  styleUrls: ['./list-alumnos.page.scss'],
})
export class ListAlumnosPage implements OnInit {

  public usuario : any;

  constructor(private router:Router, private capi: ConsumoapiService) { }

  ngOnInit() {
    this.capi.getUsuario().subscribe((res:any) =>{
      console.log(res);
      this.usuario = res.users;
    });
}
}
