import { TestBed } from '@angular/core/testing';

import { NerModelService } from './ner-model.service';

describe('NerModelService', () => {
  let service: NerModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NerModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
