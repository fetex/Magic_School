import { Component, OnInit } from '@angular/core';
import { HowardsService } from '../../services/howards.service';
import { House } from '../../Interfaces/interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}


  ngOnInit(){
}
}
