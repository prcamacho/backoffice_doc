/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GsbMarketStoresInfoComponent } from './gsb-market-stores-info.component';

describe('GsbMarketStoresInfoComponent', () => {
  let component: GsbMarketStoresInfoComponent;
  let fixture: ComponentFixture<GsbMarketStoresInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsbMarketStoresInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsbMarketStoresInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
