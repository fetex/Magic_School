import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { House4Page } from './house4.page';

const routes: Routes = [
  {
    path: '',
    component: House4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class House4PageRoutingModule {}
