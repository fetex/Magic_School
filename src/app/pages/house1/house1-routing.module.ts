import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { House1Page } from './house1.page';

const routes: Routes = [
  {
    path: '',
    component: House1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class House1PageRoutingModule {}
