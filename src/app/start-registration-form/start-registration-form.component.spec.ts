import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRegistrationFormComponent } from './start-registration-form.component';

describe('StartRegistrationFormComponent', () => {
  let component: StartRegistrationFormComponent;
  let fixture: ComponentFixture<StartRegistrationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartRegistrationFormComponent]
    });
    fixture = TestBed.createComponent(StartRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
