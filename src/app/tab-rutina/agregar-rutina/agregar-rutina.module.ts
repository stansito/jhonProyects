import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarRutinaPageRoutingModule } from './agregar-rutina-routing.module';

import { AgregarRutinaPage } from './agregar-rutina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarRutinaPageRoutingModule
  ],
  declarations: [AgregarRutinaPage]
})
export class AgregarRutinaPageModule {}
