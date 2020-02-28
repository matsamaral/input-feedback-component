import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFeedbackComponent } from './input-feedback.component';

describe('InputFeedbackComponent', () => {
  let component: InputFeedbackComponent;
  let fixture: ComponentFixture<InputFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
