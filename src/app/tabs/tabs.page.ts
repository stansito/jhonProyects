import { Component, ViewChild } from '@angular/core';
import { IonRouterOutlet, IonTabs } from '@ionic/angular'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild(IonTabs) tabs!: IonTabs;

  constructor() {}

  tabChange() {
    const activeTab = this.tabs.getSelected();
    // Lógica a realizar cuando cambias entre pestañas
    console.log('Cambiaste de pestaña:', activeTab);
  }

  ionViewWillLeave() {
    this.propagateToActiveTab('ionViewWillLeave');
  }
  
  ionViewDidLeave() {
    this.propagateToActiveTab('ionViewDidLeave');
  }
  
  ionViewWillEnter() {
    this.propagateToActiveTab('ionViewWillEnter');
  }
  
  ionViewDidEnter() {
    this.propagateToActiveTab('ionViewDidEnter');
  }
  
  private propagateToActiveTab(eventName: string) {    
    if (this.tabs.outlet && this.tabs.outlet.activatedView) {
      const activeTab = this.tabs.outlet.activatedView.element;
      if (activeTab) {
        activeTab.dispatchEvent(new CustomEvent(eventName));
      }
    }
  }
}
