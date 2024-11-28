import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfLearningComponent } from './pdf-learning.component';

describe('PdfLearningComponent', () => {
  let component: PdfLearningComponent;
  let fixture: ComponentFixture<PdfLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
