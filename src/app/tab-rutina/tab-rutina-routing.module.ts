import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabRutinaPage } from './tab-rutina.page';

const routes: Routes = [
  {
    path: '',
    component: TabRutinaPage,
    children: [
      {
        path: 'rutina/ver-rutina',
        loadChildren: () =>
          import('./ver-rutina/ver-rutina.module').then((m) => m.VerRutinaPageModule),
      },
      {
        path: 'rutina/agregar-rutina',
        loadChildren: () =>
          import('./agregar-rutina/agregar-rutina.module').then((m) => m.AgregarRutinaPageModule),
      },
      // Puedes agregar más rutas hijas si es necesario
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/rutina',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRutinaPageRoutingModule {}
