import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { InvitarAmigosPage } from './invitar-amigos.page';

describe('InvitarAmigosPage', () => {
  let component: InvitarAmigosPage;
  let fixture: ComponentFixture<InvitarAmigosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InvitarAmigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
