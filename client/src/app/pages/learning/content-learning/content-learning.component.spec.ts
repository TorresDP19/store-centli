import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLearningComponent } from './content-learning.component';

describe('ContentLearningComponent', () => {
  let component: ContentLearningComponent;
  let fixture: ComponentFixture<ContentLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
