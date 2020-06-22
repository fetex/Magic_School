import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Member } from '../../Interfaces/interface';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {

  @Input() infoMember: any;
  constructor() { }

  ngOnInit() {}
}
