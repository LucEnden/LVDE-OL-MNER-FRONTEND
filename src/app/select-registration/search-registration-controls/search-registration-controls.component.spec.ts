import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRegistrationControlsComponent } from './search-registration-controls.component';

describe('SearchRegistrationControlsComponent', () => {
  let component: SearchRegistrationControlsComponent;
  let fixture: ComponentFixture<SearchRegistrationControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchRegistrationControlsComponent]
    });
    fixture = TestBed.createComponent(SearchRegistrationControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
