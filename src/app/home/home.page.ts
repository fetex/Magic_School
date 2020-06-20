import { Component, OnInit } from '@angular/core';
import { HowardsService } from '../services/howards.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  houses = ['Gryffindod', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];


  constructor( private howardService: HowardsService) {}


  ngOnInit(){

    this.howardService.getAllHouses()
    .subscribe( resp => {
      console.log('houses', resp);
    });
}
}
