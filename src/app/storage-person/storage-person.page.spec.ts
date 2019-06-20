import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragePersonPage } from './storage-person.page';

describe('StoragePersonPage', () => {
  let component: StoragePersonPage;
  let fixture: ComponentFixture<StoragePersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoragePersonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragePersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
