import { Component, OnInit, Input } from '@angular/core';
import { HowardsService } from '../../services/howards.service';
import { Member } from '../../Interfaces/interface';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {

  @Input() members: any[];
  @Input()  filter: string;
  constructor( private hogwardService: HowardsService) { }

  ngOnInit() {
    this.hogwardService.getMembers()
    .subscribe( resp => {
      this.members.push( ...resp);
      console.log('members', resp);
    });
  }



}
