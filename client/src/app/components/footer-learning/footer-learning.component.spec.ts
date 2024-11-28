import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLearningComponent } from './footer-learning.component';

describe('FooterLearningComponent', () => {
  let component: FooterLearningComponent;
  let fixture: ComponentFixture<FooterLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
