import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketPurchasesComponent } from './gsb-market-purchases.component';

describe('GsbMarketPurchasesComponent', () => {
  let component: GsbMarketPurchasesComponent;
  let fixture: ComponentFixture<GsbMarketPurchasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketPurchasesComponent],
    });
    fixture = TestBed.createComponent(GsbMarketPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
