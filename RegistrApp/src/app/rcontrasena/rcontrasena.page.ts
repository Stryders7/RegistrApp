import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rcontrasena',
  templateUrl: './rcontrasena.page.html',
  styleUrls: ['./rcontrasena.page.scss'],
})
export class RcontrasenaPage implements OnInit {

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit() {
  }

  volveralogin(){
    this.router.navigate(['/pag-principal'])
  }

}
