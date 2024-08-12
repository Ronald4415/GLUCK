import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ahorros',
  templateUrl: './ahorros.page.html',
  styleUrls: ['./ahorros.page.scss'],
})
export class AhorrosPage implements OnInit {

  constructor(
    private location: Location,
  ) { }


  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
