import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsContainerComponent } from './patient-info-container.component';

describe('PatientDetailsContainerComponent', () => {
  let component: PatientDetailsContainerComponent;
  let fixture: ComponentFixture<PatientDetailsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDetailsContainerComponent]
    });
    fixture = TestBed.createComponent(PatientDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
