import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StateService } from './state/state.service';
import { SeguridadGuard } from './seguridad.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'pag-principal',
    pathMatch: 'full'
  },
  {
    path: 'pag-principal',
    loadChildren: () => import('./pag-principal/pag-principal.module').then( m => m.PagPrincipalPageModule)
  },
  {
    path: 'inicio',
    canActivate:[SeguridadGuard],
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'rcontrasena',
    loadChildren: () => import('./rcontrasena/rcontrasena.module').then( m => m.RcontrasenaPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
