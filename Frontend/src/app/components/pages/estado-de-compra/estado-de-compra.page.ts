import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-estado-de-compra',
  templateUrl: './estado-de-compra.page.html',
  styleUrls: ['./estado-de-compra.page.scss'],
})
export class EstadoDeCompraPage implements OnInit {

  constructor(
    private location: Location,
  ) { }
  
  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
