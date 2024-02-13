import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarRutinaPage } from './agregar-rutina.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarRutinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarRutinaPageRoutingModule {}
