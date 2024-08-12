import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoDeCompraPage } from './estado-de-compra.page';

describe('EstadoDeCompraPage', () => {
  let component: EstadoDeCompraPage;
  let fixture: ComponentFixture<EstadoDeCompraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstadoDeCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
