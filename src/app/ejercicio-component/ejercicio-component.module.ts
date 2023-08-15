import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EjercicioComponentComponent } from './ejercicio-component.component';
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [EjercicioComponentComponent],
  exports: [EjercicioComponentComponent]
})
export class EjercicioComponentComponentModule {}
