import { Component, OnInit } from '@angular/core';
import { HowardsService } from '../../services/howards.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor( private howardService: HowardsService ) { }

  ngOnInit() {

    this.howardService.getAllHouses()
    .subscribe( resp => {
      console.log('houses', resp);
    });
  }

}
