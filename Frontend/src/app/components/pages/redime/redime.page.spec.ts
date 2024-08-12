import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedimePage } from './redime.page';

describe('RedimePage', () => {
  let component: RedimePage;
  let fixture: ComponentFixture<RedimePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RedimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
