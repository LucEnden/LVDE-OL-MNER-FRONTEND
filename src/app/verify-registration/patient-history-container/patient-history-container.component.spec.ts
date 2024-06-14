import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHistoryContainerComponent } from './patient-history-container.component';

describe('PatientHistoryContainerComponent', () => {
  let component: PatientHistoryContainerComponent;
  let fixture: ComponentFixture<PatientHistoryContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientHistoryContainerComponent]
    });
    fixture = TestBed.createComponent(PatientHistoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
