import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { House2Page } from './house2.page';

const routes: Routes = [
  {
    path: '',
    component: House2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class House2PageRoutingModule {}
