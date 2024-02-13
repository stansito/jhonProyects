import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerRutinaPageRoutingModule } from './ver-rutina-routing.module';

import { VerRutinaPage } from './ver-rutina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerRutinaPageRoutingModule
  ],
  declarations: [VerRutinaPage]
})
export class VerRutinaPageModule {}
