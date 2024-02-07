// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {EjercicioModalComponent} from '../modals/ejercicio-modal/ejercicio-modal.component'
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class ExploreContainerComponent {
  dataEntries: { ejercicio: string, seriesList: { numeroSerie: number, repeticiones: number, peso: number }[], rutina?: boolean }[] = [];
  //series = 'This modal example uses the modalController to present and dismiss modals.';
 

  constructor(private modalCtrl: ModalController, private storage: Storage) {
    this.loadStoredData();
  }

  async loadStoredData() {
    const storage = await this.storage.create(); // Crear la base de datos
    const storedData = await storage.get('dataEntries');
    if (storedData) {
      this.dataEntries = storedData;
    }
  }
  async openModal() {
    const modalData = await this.modalCtrl.create({
      component: EjercicioModalComponent,
    });
    modalData.present();
  
    const { data, role } = await modalData.onDidDismiss();
  
    if (role === 'confirm') {
      this.dataEntries.push({ ejercicio: data.ejercicio, seriesList: data.seriesList });
      this.saveData(); // Guardar datos en Ionic Storage
    }
  }

  async saveData() {
    await this.storage.set('dataEntries', this.dataEntries);
  }

  async editEntry(index: number) {
    const modalData = await this.modalCtrl.create({
      component: EjercicioModalComponent,
      componentProps: {
        ejercicio: this.dataEntries[index].ejercicio,
        seriesList: this.dataEntries[index].seriesList
      },
    });
    modalData.present();
  
    const { data, role } = await modalData.onDidDismiss();
  
    if (role === 'confirm' && data) {
      this.dataEntries[index] = data;
      this.saveData(); // Guardar datos en Ionic Storage
    }
  }

    // Incrementar el valor de la propiedad especificada en la entrada
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  increaseValue(entry: any, property: string) {
    entry[property]++;
  }

  // Decrementar el valor de la propiedad especificada en la entrada
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  decreaseValue(entry: any, property: string) {
    if (entry[property] > 0) {
      entry[property]--;
    }
  }
  createRutina() {
    const rutinaEntries = this.dataEntries.filter(entry => entry.rutina);
    // Lógica adicional para manejar la nueva rutinaEntries según tus necesidades
    console.log('Nueva Rutina:', rutinaEntries);
  }
  toggleRutina(entry: any) {
    entry.rutina = !entry.rutina;
  }
}
