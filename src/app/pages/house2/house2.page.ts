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
  filter: string;

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

  Sort(){
    switch (this.filter) {
      case 'name':
        this.members = this.members.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        break;
      case 'lastName':
        this.members = this.members.sort((a, b) =>
          a.name.split(' ')[1] > b.name.split(' ')[1] ? 1
            : b.name.split(' ')[1] > a.name.split(' ')[1] ? -1 : 0
        );
        break;
    }

  }
}
