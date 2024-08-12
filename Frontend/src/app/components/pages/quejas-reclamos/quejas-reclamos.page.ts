import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quejas-reclamos',
  templateUrl: './quejas-reclamos.page.html',
  styleUrls: ['./quejas-reclamos.page.scss'],
})
export class QuejasReclamosPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
