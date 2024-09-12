/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GsbMarketStoresDeleteModalComponent } from './gsb-market-stores-delete-modal.component';

describe('GsbMarketStoresDeleteModalComponent', () => {
  let component: GsbMarketStoresDeleteModalComponent;
  let fixture: ComponentFixture<GsbMarketStoresDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsbMarketStoresDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsbMarketStoresDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
