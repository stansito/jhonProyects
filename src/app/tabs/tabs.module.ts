import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';
import {EjercicioModalComponentModule} from '../modals/ejercicio-modal/ejercicio-modal.module'
import {TabRutinaPageModule} from '../tab-rutina/tab-rutina.module'
import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    EjercicioModalComponentModule,
    TabRutinaPageModule

  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
