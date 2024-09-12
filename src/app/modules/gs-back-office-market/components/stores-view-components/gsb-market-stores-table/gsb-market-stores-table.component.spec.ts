/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GsbMarketStoresTableComponent } from './gsb-market-stores-table.component';

describe('GsbMarketStoresTableComponent', () => {
  let component: GsbMarketStoresTableComponent;
  let fixture: ComponentFixture<GsbMarketStoresTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsbMarketStoresTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsbMarketStoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
