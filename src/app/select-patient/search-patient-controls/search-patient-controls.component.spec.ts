import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPatientControlsComponent } from './search-patient-controls.component';

describe('SearchPatientControlsComponent', () => {
  let component: SearchPatientControlsComponent;
  let fixture: ComponentFixture<SearchPatientControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPatientControlsComponent]
    });
    fixture = TestBed.createComponent(SearchPatientControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
