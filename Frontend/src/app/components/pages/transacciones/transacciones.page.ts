import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.page.html',
  styleUrls: ['./transacciones.page.scss'],
})
export class TransaccionesPage implements OnInit {
  selectedSegment = 'segmento1';
  constructor() { }

  ngOnInit() {
  }
  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
  }
}
