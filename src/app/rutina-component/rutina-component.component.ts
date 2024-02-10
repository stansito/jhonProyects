import { Component, Input } from '@angular/core';
import { ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-rutina-component',
  templateUrl: './rutina-component.component.html',
  styleUrls: ['./rutina-component.component.scss'],
})
export class RutinaComponentComponent  {
  @Input() rutinaEntries: any[] = [];

  constructor(private storage: Storage) {
    console.log('Constructor de RutinaComponentComponent');
    this.loadStoredData();
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
