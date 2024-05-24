import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { registrationSelectedGuard } from './registration-selected.guard';

describe('registrationSelectedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => registrationSelectedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
