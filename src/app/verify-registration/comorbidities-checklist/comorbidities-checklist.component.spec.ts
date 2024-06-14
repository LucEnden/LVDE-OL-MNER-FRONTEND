import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComorbiditiesChecklistComponent } from './comorbidities-checklist.component';

describe('ComorbiditiesChecklistComponent', () => {
  let component: ComorbiditiesChecklistComponent;
  let fixture: ComponentFixture<ComorbiditiesChecklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComorbiditiesChecklistComponent]
    });
    fixture = TestBed.createComponent(ComorbiditiesChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
