import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-estado-pqrs',
  templateUrl: './estado-pqrs.page.html',
  styleUrls: ['./estado-pqrs.page.scss'],
})
export class EstadoPqrsPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  
  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
