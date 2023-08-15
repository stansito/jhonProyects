import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {EjercicioModalComponent} from '../modals/ejercicio-modal/ejercicio-modal.component'

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  dataEntries: { series: string, repeticiones: string, peso: string }[] = [];
  //series = 'This modal example uses the modalController to present and dismiss modals.';

  constructor(private modalCtrl: ModalController) {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: EjercicioModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
    
      this.dataEntries.push(data);
    }
  }

  async editEntry(index: number) {
    const modal = await this.modalCtrl.create({
      component: EjercicioModalComponent,
      componentProps: {
        series: this.dataEntries[index].series,
        repeticiones: this.dataEntries[index].repeticiones,
        peso: this.dataEntries[index].peso
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm' && data) {
      this.dataEntries[index] = data;
    }
  }
}
