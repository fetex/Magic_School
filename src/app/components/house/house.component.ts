import { Component, OnInit, Input } from '@angular/core';
import { House } from '../../Interfaces/interface';
import { HowardsService } from '../../services/howards.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
})
export class HouseComponent implements OnInit {

  @Input()  detail: any[];

  constructor( private hogwardsService: HowardsService) { }

  ngOnInit() {}


}
