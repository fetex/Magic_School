import { Component, OnInit, Input } from '@angular/core';
import { HowardsService } from '../../services/howards.service';
import { ModalController } from '@ionic/angular';
import { Member } from '../../Interfaces/interface';
import { MemberComponent } from '../member/member.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {

  @Input() members: any[];
  @Input()  filter: string;

  member: any[];


  constructor( private hogwardService: HowardsService,
               public modalCltr: ModalController) { }

  ngOnInit() {
    this.hogwardService.getMembers()
    .subscribe( resp => {
      this.members.push( ...resp);
    });
  }



  async details( member: any) {
    const modal = await this.modalCltr.create({
      component: MemberComponent,
      componentProps: {
        infoMember: member
      }
    })
    .then(currentModal => {
      currentModal.present();
      return currentModal.onDidDismiss();
    });
  }



}
