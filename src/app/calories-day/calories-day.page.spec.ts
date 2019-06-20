import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesDayPage } from './calories-day.page';

describe('CaloriesDayPage', () => {
  let component: CaloriesDayPage;
  let fixture: ComponentFixture<CaloriesDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesDayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
