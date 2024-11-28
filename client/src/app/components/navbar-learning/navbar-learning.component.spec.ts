import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLearningComponent } from './navbar-learning.component';

describe('NavbarLearningComponent', () => {
  let component: NavbarLearningComponent;
  let fixture: ComponentFixture<NavbarLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
