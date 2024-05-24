import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPatientComponent } from './select-patient.component';

describe('SelectPatientComponent', () => {
  let component: SelectPatientComponent;
  let fixture: ComponentFixture<SelectPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectPatientComponent]
    });
    fixture = TestBed.createComponent(SelectPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
