import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EjercicioModalComponent } from './ejercicio-modal.component';
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [EjercicioModalComponent],
  exports: [EjercicioModalComponent]
})
export class EjercicioModalComponentModule   {}
