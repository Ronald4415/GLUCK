import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-invitar-amigos',
  templateUrl: './invitar-amigos.page.html',
  styleUrls: ['./invitar-amigos.page.scss'],
})
export class InvitarAmigosPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
