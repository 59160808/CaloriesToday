import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeTeePage } from './bee-tee.page';

describe('BeeTeePage', () => {
  let component: BeeTeePage;
  let fixture: ComponentFixture<BeeTeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeTeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeTeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
