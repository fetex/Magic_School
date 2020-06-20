import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesComponent } from './houses/houses.component';
import { HouseMembersComponent } from './house-members/house-members.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    HousesComponent,
    HouseMembersComponent
  ],
  exports: [
    HousesComponent,
    HouseMembersComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
