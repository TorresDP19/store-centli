import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosLearningComponent } from './videos-learning.component';

describe('VideosLearningComponent', () => {
  let component: VideosLearningComponent;
  let fixture: ComponentFixture<VideosLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
