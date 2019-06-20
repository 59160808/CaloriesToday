import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalAllpublicPage } from './cal-allpublic.page';

describe('CalAllpublicPage', () => {
  let component: CalAllpublicPage;
  let fixture: ComponentFixture<CalAllpublicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalAllpublicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalAllpublicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
