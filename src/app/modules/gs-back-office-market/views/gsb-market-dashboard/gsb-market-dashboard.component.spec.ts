import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketDashboardComponent } from './gsb-market-dashboard.component';

describe('GsbMarketDashboardComponent', () => {
  let component: GsbMarketDashboardComponent;
  let fixture: ComponentFixture<GsbMarketDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketDashboardComponent],
    });
    fixture = TestBed.createComponent(GsbMarketDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
