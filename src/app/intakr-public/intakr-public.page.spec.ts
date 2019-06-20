import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakrPublicPage } from './intakr-public.page';

describe('IntakrPublicPage', () => {
  let component: IntakrPublicPage;
  let fixture: ComponentFixture<IntakrPublicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakrPublicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakrPublicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
