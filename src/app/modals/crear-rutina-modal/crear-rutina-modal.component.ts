import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-crear-rutina-modal',
  templateUrl: './crear-rutina-modal.component.html',
  styleUrls: ['./crear-rutina-modal.component.scss'],
})
export class CrearRutinaModalComponent {

  nombreRutina: string = '';

  constructor(private modalCtrl: ModalController, private navParams: NavParams) {
    // Recupera el nombre de la rutina actual si está presente
    this.nombreRutina = this.navParams.get('nombreRutina') || '';
  }

  cerrarModal() {
    // Cerrar la modal sin hacer nada
    this.modalCtrl.dismiss();
  }

  guardarNuevaRutina() {
    this.modalCtrl.dismiss({
      nombreRutina: this.nombreRutina
    }, 'confirm');
  }
}
