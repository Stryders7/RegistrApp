import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { HttpClientModule } from '@angular/common/http';
import { ConsumoapiService } from '../Servconsumo/consumoapi.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    HttpClientModule,
    
  ],
  declarations: [InicioPage],
  providers: [ConsumoapiService]
})
export class InicioPageModule {}
