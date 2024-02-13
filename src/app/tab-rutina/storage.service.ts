// storage.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage) {}

  async loadStoredData() {
    await this.storage.create();
    const rutina = await this.storage.get('rutinaActual');
    return rutina || [];
  }
}
