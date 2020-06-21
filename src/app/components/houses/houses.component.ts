import { Component, OnInit, Input } from '@angular/core';
import { HowardsService } from '../../services/howards.service';
import { House } from '../../Interfaces/interface';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss'],
})
export class HousesComponent implements OnInit {

  houses: House[] = [];
  @Input() DetailsHouse: any[];



  constructor( private howardService: HowardsService) { }

  ngOnInit() {
    this.howardService.getAllHouses()
    .subscribe( resp => {
      this.houses = resp;
      this.DetailsHouse = [
        {
          name: this.houses[0].name,
          img: '/assets/images/Logo_Gryffindor.PNG'
        },
        {
          name: this.houses[1].name,
          img: '/assets/images/Logo_Ravenclaw.PNG'
        },
        {
          name: this.houses[2].name,
          img: '/assets/images/Logo_Slytherin.PNG'
        },
        {
          name: this.houses[3].name,
          img: '/assets/images/Logo_Hufflepuf.PNG'
        }
      ];
      console.log('detail', this.DetailsHouse);
    });
  }





}
