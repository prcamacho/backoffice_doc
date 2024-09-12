import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbStorePurchasesComponent } from './gsb-store-purchases.component';

describe('GsbStorePurchasesComponent', () => {
  let component: GsbStorePurchasesComponent;
  let fixture: ComponentFixture<GsbStorePurchasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbStorePurchasesComponent],
    });
    fixture = TestBed.createComponent(GsbStorePurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
