import { Component, OnDestroy } from '@angular/core';
import { ActiveTabService } from '../active-tab.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-ver-rutina',
  templateUrl: 'ver-rutina.page.html',
  styleUrls: ['ver-rutina.page.scss'],
})
export class VerRutinaPage implements OnDestroy {
  rutinaEntries: any[] = [];

  constructor(private activeTabService: ActiveTabService, private storage: Storage) {
    console.log('Constructor de VerRutinaPage');
    const activeTab = this.activeTabService.activeTab;

    if (activeTab) {
      activeTab.addEventListener('ionViewDidEnter', () => {
        this.ionViewDidEnter();
      });
    }
  }
  ngOnDestroy() {
    const activeTab = this.activeTabService.activeTab;
    if (activeTab) {
      activeTab.removeEventListener('ionViewDidEnter', () => {
        this.ionViewDidEnter();
      });
    }
  }
  async loadData() {

      await this.storage.create();
      const rutina = await this.storage.get('rutinaActual');
      if (rutina) {
        this.rutinaEntries = rutina;
        console.log(this.rutinaEntries);
      }
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter de VerRutinaPage');
    this.loadData();
  }

  // Otros eventos del ciclo de vida...
}
