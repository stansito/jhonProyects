// ver-rutina-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerRutinaPage } from './ver-rutina.page';

const routes: Routes = [
  {
    path: '',
    component: VerRutinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerRutinaPageRoutingModule {}
