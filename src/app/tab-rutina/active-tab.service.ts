import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveTabService {
  activeTab?: HTMLElement;

  setActiveTab(tab: HTMLElement) {
    this.activeTab = tab;
  }
}
