import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { House2PageRoutingModule } from './house2-routing.module';

import { House2Page } from './house2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    House2PageRoutingModule
  ],
  declarations: [House2Page]
})
export class House2PageModule {}
