import { Component, ViewChild } from '@angular/core';
import { IonRouterOutlet, IonTabs } from '@ionic/angular'

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild(IonTabs) tabs!: IonTabs;
  private activeTab?: HTMLElement;
  constructor() {}

  tabChange(tabsRef: IonTabs) {
    if (tabsRef.outlet.activatedView != null) {
      this.activeTab = tabsRef.outlet.activatedView.element;
      console.log('Cambiaste de pestaña:', this.activeTab);
    }
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
    if (this.activeTab) {
      this.activeTab.dispatchEvent(new CustomEvent(eventName));
    }
  }
 
  
}
