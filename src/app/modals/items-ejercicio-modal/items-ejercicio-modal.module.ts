import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ItemsEjercicioModalComponent } from './items-ejercicio-modal.component';
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ItemsEjercicioModalComponent],
  exports: [ItemsEjercicioModalComponent]
})
export class ItemsEjercicioModalComponentModule  {}
