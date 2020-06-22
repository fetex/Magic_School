import { Component, OnInit, Input } from '@angular/core';
import { HowardsService } from '../../services/howards.service';
import { House } from '../../Interfaces/interface';


@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss'],
})
export class HouseDetailsComponent implements OnInit {

  @Input() DetailsHouse: any[];
  @Input() house: House[] = [];

  constructor( private howardService: HowardsService) { }

  ngOnInit() {
  }

}
