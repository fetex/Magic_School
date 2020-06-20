import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { House3PageRoutingModule } from './house3-routing.module';

import { House3Page } from './house3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    House3PageRoutingModule
  ],
  declarations: [House3Page]
})
export class House3PageModule {}
