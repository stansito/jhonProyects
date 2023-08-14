import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-ejercicio-modal',
  templateUrl: './ejercicio-modal.component.html',
  styleUrls: ['./ejercicio-modal.component.scss'],
})
export class EjercicioModalComponent  {
  series: string;
  repeticiones: string;
  peso : string

  constructor(private modalCtrl: ModalController) {
    this.series= '';
    this.repeticiones = ''
    this.peso = '';
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss({ series: this.series, repeticiones: this.repeticiones, peso: this.peso }, 'confirm');
  }

}




