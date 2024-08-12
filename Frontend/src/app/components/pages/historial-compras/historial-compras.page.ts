import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.page.html',
  styleUrls: ['./historial-compras.page.scss'],
})
export class HistorialComprasPage implements OnInit {

  constructor(
    private location: Location,
  ) { }


  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
