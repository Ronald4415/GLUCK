import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-categoria-cliente',
  templateUrl: './categoria-cliente.page.html',
  styleUrls: ['./categoria-cliente.page.scss'],
})
export class CategoriaClientePage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  goBack() {
    this.location.back();
  }


  ngOnInit() {
  }

}
