import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpersonPage } from './addperson.page';

describe('AddpersonPage', () => {
  let component: AddpersonPage;
  let fixture: ComponentFixture<AddpersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpersonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
