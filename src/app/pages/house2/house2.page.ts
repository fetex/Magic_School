import { Component, OnInit,  ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { HowardsService } from '../../services/howards.service';
import { Member } from '../../Interfaces/interface';

@Component({
  selector: 'app-house2',
  templateUrl: './house2.page.html',
  styleUrls: ['./house2.page.scss'],
})
export class House2Page implements OnInit {

  names = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];
  @ViewChild(IonSegment, {static: true})  segment: IonSegment;

  members: Member[] = [];

  constructor( private hogwardService: HowardsService) { }

  ngOnInit() {
    this.segment.value = this.names[0]; /* Value for defaul in the segment*/
    this.loadMembers( this.names[0]);
  }


  houseChanged(event){
    this.members = [];
    this.loadMembers( event.detail.value);
  }

  /* Function load Members' House */
  loadMembers( house: string){
    this.hogwardService.getMembersbyHouse( house)
    .subscribe( resp => {
      this.members.push( ...resp);
    });

  }

}
