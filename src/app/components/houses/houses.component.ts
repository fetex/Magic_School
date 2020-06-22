import { Component, OnInit, Input } from '@angular/core';
import { HowardsService } from '../../services/howards.service';
import { House } from '../../Interfaces/interface';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
})
export class HousesComponent implements OnInit {

  DetailsHouse: any[];

  @Input() houses: House[] = [];



  constructor( private howardService: HowardsService) { }

  ngOnInit() {
    this.howardService.getAllHouses()
    .subscribe( resp => {
      this.houses = resp;
      this.DetailsHouse = [
        {
          name: this.houses[0].name,
          img: '/assets/images/Logo_Gryffindor.PNG',
          total: this.houses[0].members.length
        },
        {
          name: this.houses[1].name,
          img: '/assets/images/Logo_Ravenclaw.PNG',
          total: this.houses[1].members.length
        },
        {
          name: this.houses[2].name,
          img: '/assets/images/Logo_Slytherin.PNG',
          total: this.houses[2].members.length
        },
        {
          name: this.houses[3].name,
          img: '/assets/images/Logo_Hufflepuf.PNG',
          total: this.houses[3].members.length
        }
      ];
    });
  }





}
