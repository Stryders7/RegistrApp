import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rcontrasena',
  templateUrl: './rcontrasena.page.html',
  styleUrls: ['./rcontrasena.page.scss'],
})
export class RcontrasenaPage implements OnInit {
  formularioRecuperar: FormGroup;

  constructor(public fb: FormBuilder, public router: Router) { 
    this.formularioRecuperar = this.fb.group({
      'nuevaContrasena': ['', Validators.required],
      'repNewContrasena': ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  volveralogin() {
    this.router.navigate(['/pag-principal'])
  }

  restablecerContrasena() {
    this.router.navigate(['/pag-principal'])
  }
}

