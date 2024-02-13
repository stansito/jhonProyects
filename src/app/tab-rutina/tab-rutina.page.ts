import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { ActiveTabService } from './active-tab.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab-rutina',
  templateUrl: 'tab-rutina.page.html',
  styleUrls: ['tab-rutina.page.scss']
})
export class TabRutinaPage implements ViewWillEnter {
  storage: any;
  rutinaEntries: any;

  constructor(private activeTabService: ActiveTabService, private router: Router) {
    const tabRutinaElement = document.querySelector('app-tab-rutina');

    if (tabRutinaElement instanceof HTMLElement) {
      this.activeTabService.setActiveTab(tabRutinaElement);
    }
  }
  _agregarRutina(){

    this.router.navigate(['/tabs/rutina/agregar-rutina']).then(() => {
      // Otro código que deseas ejecutar después de la navegación
      console.log('entra');
    });
  }
  
  ionViewWillEnter() {
    console.log('ionViewWillEnter de TabRutinaPage');
  }
  async loadStoredData() {
    await this.storage.create();
    const rutina = await this.storage.get('rutinaActual');
    if (rutina) {
      this.rutinaEntries = rutina;
      console.log(this.rutinaEntries);
    }
  }
}

