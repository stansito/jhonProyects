// Importa los módulos necesarios
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RutinaContainerComponent } from './rutina-container.component';
import { CrearRutinaModalComponent } from '../modals/crear-rutina-modal/crear-rutina-modal.component'; // Ajusta la ruta según tu estructura

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [RutinaContainerComponent, CrearRutinaModalComponent], // Agrega CrearRutinaModalComponent aquí
  exports: [RutinaContainerComponent],
})
export class RutinaContainerComponentModule {}
