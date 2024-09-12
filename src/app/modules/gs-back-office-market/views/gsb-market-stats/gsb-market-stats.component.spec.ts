import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketStatsComponent } from './gsb-market-stats.component';

describe('GsbMarketStatsComponent', () => {
  let component: GsbMarketStatsComponent;
  let fixture: ComponentFixture<GsbMarketStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketStatsComponent],
    });
    fixture = TestBed.createComponent(GsbMarketStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
