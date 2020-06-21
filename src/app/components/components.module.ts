import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesComponent } from './houses/houses.component';
import { IonicModule } from '@ionic/angular';
import { HouseComponent } from './house/house.component';


@NgModule({
  declarations: [
    HousesComponent,
    HouseComponent
  ],
  exports: [
    HousesComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
