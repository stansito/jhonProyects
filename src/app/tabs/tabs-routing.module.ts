import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'rutina',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-rutina/tab-rutina.module').then((m) => m.TabRutinaPageModule),
          },
        ],
      },
      {
        path: 'rutina/ver-rutina',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-rutina/ver-rutina/ver-rutina.module').then((m) => m.VerRutinaPageModule),
          },
        ],
      },
      {
        path: 'rutina/agregar-rutina',
        children: [
          {
            path: '',
            loadChildren: () =>import('../tab-rutina/agregar-rutina/agregar-rutina.module').then((m) => m.AgregarRutinaPageModule),
          },
        ],
      },
    /*  {
        path: 'rutina',
        loadChildren: () => import('../tab-rutina/tab-rutina.module').then(m => m.TabRutinaPageModule)
      },*/
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab3',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
