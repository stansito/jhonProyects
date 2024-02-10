import { Component, ViewChild } from '@angular/core';
import { ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { RutinaComponentComponent } from '../rutina-component/rutina-component.component';


@Component({
  selector: 'app-tab-rutina',
  templateUrl: 'tab-rutina.page.html',
  styleUrls: ['tab-rutina.page.scss']
})
export class TabRutinaPage implements ViewWillEnter, ViewDidEnter {
  @ViewChild(RutinaComponentComponent) rutinaComponentComponent!: RutinaComponentComponent;
  rutinaEntries: any[] = [];

  constructor(private storage: Storage) {}

  ionViewWillEnter() {
    this.rutinaComponentComponent.loadStoredData();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter de TabRutinaPage');
    // Puedes dejar esta función vacía o agregar más lógica si es necesario
  }

}
