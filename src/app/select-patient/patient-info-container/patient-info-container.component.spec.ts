import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInfoContainerComponent } from './patient-info-container.component';

describe('PatientInfoContainerComponent', () => {
  let component: PatientInfoContainerComponent;
  let fixture: ComponentFixture<PatientInfoContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientInfoContainerComponent]
    });
    fixture = TestBed.createComponent(PatientInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
