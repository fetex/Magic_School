import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { House1PageRoutingModule } from './house1-routing.module';

import { House1Page } from './house1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    House1PageRoutingModule
  ],
  declarations: [House1Page]
})
export class House1PageModule {}
