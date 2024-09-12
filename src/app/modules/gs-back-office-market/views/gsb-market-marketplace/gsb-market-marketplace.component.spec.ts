import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketMarketplaceComponent } from './gsb-market-marketplace.component';

describe('GsbMarketMarketplaceComponent', () => {
  let component: GsbMarketMarketplaceComponent;
  let fixture: ComponentFixture<GsbMarketMarketplaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketMarketplaceComponent],
    });
    fixture = TestBed.createComponent(GsbMarketMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
