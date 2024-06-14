import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyRegistrationActionsComponent } from './verify-registration-actions.component';

describe('VerifyRegistrationActionsComponent', () => {
  let component: VerifyRegistrationActionsComponent;
  let fixture: ComponentFixture<VerifyRegistrationActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyRegistrationActionsComponent]
    });
    fixture = TestBed.createComponent(VerifyRegistrationActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
