import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AddForm } from './addForm.page';

describe('AddFormPage', () => {
  let component: AddForm;
  let fixture: ComponentFixture<AddForm>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
