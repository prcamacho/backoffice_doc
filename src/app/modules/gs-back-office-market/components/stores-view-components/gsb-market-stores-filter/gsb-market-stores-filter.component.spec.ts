/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GsbMarketStoresFilterComponent } from './gsb-market-stores-filter.component';

describe('GsbMarketStoresFilterComponent', () => {
  let component: GsbMarketStoresFilterComponent;
  let fixture: ComponentFixture<GsbMarketStoresFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsbMarketStoresFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsbMarketStoresFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
