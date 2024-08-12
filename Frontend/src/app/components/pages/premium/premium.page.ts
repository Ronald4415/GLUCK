import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.page.html',
  styleUrls: ['./premium.page.scss'],
})
export class PremiumPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  goBack() {
    this.location.back();
  }


  ngOnInit() {
  }

}
