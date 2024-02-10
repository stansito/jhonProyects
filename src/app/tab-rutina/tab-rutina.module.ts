import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabRutinaPage } from './tab-rutina.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { EjercicioComponentComponentModule } from '../ejercicio-component/ejercicio-component.module';
import { TabRutinaPageRoutingModule } from './tab-rutina-routing.module';
import { RutinaComponentComponentModule } from "../rutina-component/rutina-component.module";

@NgModule({
    declarations: [TabRutinaPage],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        TabRutinaPageRoutingModule,
        EjercicioComponentComponentModule,
        RutinaComponentComponentModule
    ]
})
export class TabRutinaPageModule {}
