import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaClientePage } from './categoria-cliente.page';

describe('CategoriaClientePage', () => {
  let component: CategoriaClientePage;
  let fixture: ComponentFixture<CategoriaClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriaClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
