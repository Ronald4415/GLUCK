import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoPqrsPage } from './estado-pqrs.page';

describe('EstadoPqrsPage', () => {
  let component: EstadoPqrsPage;
  let fixture: ComponentFixture<EstadoPqrsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstadoPqrsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
