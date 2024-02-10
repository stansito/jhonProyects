import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaComponentComponent } from './rutina-component.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [RutinaComponentComponent],
  exports: [RutinaComponentComponent]
})
export class RutinaComponentComponentModule {}
