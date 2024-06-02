import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationInfoContainerComponent } from './registration-info-container.component';

describe('RegistrationInfoContainerComponent', () => {
  let component: RegistrationInfoContainerComponent;
  let fixture: ComponentFixture<RegistrationInfoContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationInfoContainerComponent]
    });
    fixture = TestBed.createComponent(RegistrationInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
