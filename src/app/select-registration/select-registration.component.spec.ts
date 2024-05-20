import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRegistrationComponent } from './select-registration.component';

describe('SelectRegistrationComponent', () => {
  let component: SelectRegistrationComponent;
  let fixture: ComponentFixture<SelectRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectRegistrationComponent]
    });
    fixture = TestBed.createComponent(SelectRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
