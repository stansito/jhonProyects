// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {EjercicioModalComponent} from '../modals/ejercicio-modal/ejercicio-modal.component'
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class ExploreContainerComponent {
  dataEntries: { ejercicio: string, seriesList: { numeroSerie: number, repeticiones: number, peso: number }[], rutina?: boolean }[] = [];
  //series = 'This modal example uses the modalController to present and dismiss modals.';
 

  constructor(private modalCtrl: ModalController, private storage: Storage, private router: Router) {
    this.loadStoredData();
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter de RutinaComponentComponent');
  }
  ionViewWillEnter(){
    console.log('ionViewWillEnter de RutinaComponentComponent');
  }
  ionViewWillLeave(){
    console.log('ionViewWillLeave de RutinaComponentComponent');
  }
  ionViewDidLeave(){
    console.log('ionViewDidLeave de RutinaComponentComponent');
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
    const rutinaEntries = this.dataEntries.filter(entry => entry.ejercicio);
    // Lógica adicional para manejar la nueva rutinaEntries según tus necesidades
    console.log('Nueva Rutina:', rutinaEntries);
  
    // Guardar la rutina en algún servicio o en el almacenamiento local
    // Esto es solo un ejemplo, ajusta según tu necesidad
    this.storage.set('rutinaActual', rutinaEntries);
  
    // Navegar a la página de la rutina
    this.router.navigate(['/tabs/rutina']).then(() => {
      // Otro código que deseas ejecutar después de la navegación
      console.log('entra');
    });
  }
  toggleRutina(entry: any) {
    entry.rutina = !entry.rutina;
  }
}
