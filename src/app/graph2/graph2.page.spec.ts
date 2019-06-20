import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph2Page } from './graph2.page';

describe('Graph2Page', () => {
  let component: Graph2Page;
  let fixture: ComponentFixture<Graph2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graph2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
