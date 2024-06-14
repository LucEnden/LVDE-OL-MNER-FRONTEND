import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationLegendComponent } from './annotation-legend.component';

describe('AnnotationLegendComponent', () => {
  let component: AnnotationLegendComponent;
  let fixture: ComponentFixture<AnnotationLegendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnotationLegendComponent]
    });
    fixture = TestBed.createComponent(AnnotationLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
