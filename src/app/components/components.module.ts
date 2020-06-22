import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesComponent } from './houses/houses.component';
import { IonicModule } from '@ionic/angular';
import { HouseComponent } from './house/house.component';
import { MembersComponent } from './members/members.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MemberComponent } from './member/member.component';


@NgModule({
  declarations: [
    HousesComponent,
    HouseComponent,
    HouseDetailsComponent,
    MembersComponent,
    MemberComponent
  ],
  exports: [
    HousesComponent,
    MembersComponent,
    MemberComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FontAwesomeModule
  ]
})
export class ComponentsModule { }
