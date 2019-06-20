import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotlecalPublicPage } from './totlecal-public.page';

describe('TotlecalPublicPage', () => {
  let component: TotlecalPublicPage;
  let fixture: ComponentFixture<TotlecalPublicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotlecalPublicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotlecalPublicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
