import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalallPage } from './calall.page';

describe('CalallPage', () => {
  let component: CalallPage;
  let fixture: ComponentFixture<CalallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
