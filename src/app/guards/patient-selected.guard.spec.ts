import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { patientSelectedGuard } from './patient-selected.guard';

describe('patientSelectedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => patientSelectedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
