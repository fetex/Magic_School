import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { House4PageRoutingModule } from './house4-routing.module';

import { House4Page } from './house4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    House4PageRoutingModule
  ],
  declarations: [House4Page]
})
export class House4PageModule {}
