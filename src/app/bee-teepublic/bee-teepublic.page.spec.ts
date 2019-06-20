import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeTeepublicPage } from './bee-teepublic.page';

describe('BeeTeepublicPage', () => {
  let component: BeeTeepublicPage;
  let fixture: ComponentFixture<BeeTeepublicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeTeepublicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeTeepublicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
