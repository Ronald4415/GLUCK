import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuejasReclamosPage } from './quejas-reclamos.page';

describe('QuejasReclamosPage', () => {
  let component: QuejasReclamosPage;
  let fixture: ComponentFixture<QuejasReclamosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuejasReclamosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
