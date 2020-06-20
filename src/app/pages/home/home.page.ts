import { Component, OnInit } from '@angular/core';
import { HowardsService } from '../../services/howards.service';
import { House } from '../../Interfaces/interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  houses = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];


  constructor( private howardService: HowardsService) {}


  ngOnInit(){

    this.howardService.getAllHouses()
    .subscribe( resp => {
      console.log('houses', resp);
    });
}
}
