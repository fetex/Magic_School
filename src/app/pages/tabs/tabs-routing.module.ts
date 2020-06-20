import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'house1',
        loadChildren: () => import('../house1/house1.module').then(m => m.House1PageModule)
      },
      {
        path: 'house2',
        loadChildren: () => import('../house2/house2.module').then(m => m.House2PageModule)
      },
      {
        path: 'house3',
        loadChildren: () => import('../house3/house3.module').then(m => m.House3PageModule)
      },
      {
        path: 'house4',
        loadChildren: () => import('../house4/house4.module').then(m => m.House4PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/house1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/house1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
