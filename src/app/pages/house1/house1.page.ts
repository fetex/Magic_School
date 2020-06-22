import { Component, OnInit, ViewChild  } from '@angular/core';
import { House } from '../../Interfaces/interface';
import { HowardsService } from '../../services/howards.service';
import { IonSegment } from '@ionic/angular';
import { element } from 'protractor';

@Component({
  selector: 'app-house1',
  templateUrl: './house1.page.html',
  styleUrls: ['./house1.page.scss'],
})
export class House1Page implements OnInit {

  names = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];
  @ViewChild(IonSegment, {static: true})  segment: IonSegment;

  houses: House[] = [];

  constructor( private hogwarService: HowardsService) { }

  ngOnInit() {
    this.hogwarService.getAllHouses()
    .subscribe( resp => {
      this.houses.push( ...resp);
    });
  }
}
