import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabRutinaPage } from './tab-rutina.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { EjercicioComponentComponentModule } from '../ejercicio-component/ejercicio-component.module';
import { TabRutinaPageRoutingModule } from './tab-rutina-routing.module';
import { VerRutinaPageRoutingModule } from './ver-rutina/ver-rutina-routing.module'
import {  AgregarRutinaPageRoutingModule } from './agregar-rutina/agregar-rutina-routing.module'
@NgModule({
    declarations: [TabRutinaPage],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        TabRutinaPageRoutingModule,
        EjercicioComponentComponentModule,
        VerRutinaPageRoutingModule,
        AgregarRutinaPageRoutingModule
    ], 
})
export class TabRutinaPageModule {}
