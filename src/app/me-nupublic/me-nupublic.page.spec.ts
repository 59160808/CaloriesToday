import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeNupublicPage } from './me-nupublic.page';

describe('MeNupublicPage', () => {
  let component: MeNupublicPage;
  let fixture: ComponentFixture<MeNupublicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeNupublicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeNupublicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
