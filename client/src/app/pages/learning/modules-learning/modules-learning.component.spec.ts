import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesLearningComponent } from './modules-learning.component';

describe('ModulesLearningComponent', () => {
  let component: ModulesLearningComponent;
  let fixture: ComponentFixture<ModulesLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
