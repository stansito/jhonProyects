import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EjercicioModalComponent } from './ejercicio-modal.component';
//import {} from '../items-ejercicio-modal/items-ejercicio-modal.component'
import {ItemsEjercicioModalComponentModule } from '../items-ejercicio-modal/items-ejercicio-modal.module'
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,ItemsEjercicioModalComponentModule],
  declarations: [EjercicioModalComponent],
  exports: [EjercicioModalComponent]
})
export class EjercicioModalComponentModule   {}
