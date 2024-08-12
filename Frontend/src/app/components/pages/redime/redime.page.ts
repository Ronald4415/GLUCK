import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-redime',
  templateUrl: './redime.page.html',
  styleUrls: ['./redime.page.scss'],
})
export class RedimePage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
