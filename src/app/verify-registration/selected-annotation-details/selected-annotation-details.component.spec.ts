import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAnnotationDetailsComponent } from './selected-annotation-details.component';

describe('SelectedAnnotationDetailsComponent', () => {
  let component: SelectedAnnotationDetailsComponent;
  let fixture: ComponentFixture<SelectedAnnotationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedAnnotationDetailsComponent]
    });
    fixture = TestBed.createComponent(SelectedAnnotationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
