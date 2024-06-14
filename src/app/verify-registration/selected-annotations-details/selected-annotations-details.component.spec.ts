import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAnnotationsDetailsComponent } from './selected-annotations-details.component';

describe('SelectedAnnotationsDetailsComponent', () => {
  let component: SelectedAnnotationsDetailsComponent;
  let fixture: ComponentFixture<SelectedAnnotationsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedAnnotationsDetailsComponent]
    });
    fixture = TestBed.createComponent(SelectedAnnotationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
