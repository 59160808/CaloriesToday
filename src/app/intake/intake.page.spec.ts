import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakePage } from './intake.page';

describe('IntakePage', () => {
  let component: IntakePage;
  let fixture: ComponentFixture<IntakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
