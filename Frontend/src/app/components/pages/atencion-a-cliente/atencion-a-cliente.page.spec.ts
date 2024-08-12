import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtencionAClientePage } from './atencion-a-cliente.page';

describe('AtencionAClientePage', () => {
  let component: AtencionAClientePage;
  let fixture: ComponentFixture<AtencionAClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AtencionAClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
