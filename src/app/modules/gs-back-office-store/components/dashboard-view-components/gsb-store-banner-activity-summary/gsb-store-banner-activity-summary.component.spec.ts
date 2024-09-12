import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerActivitySummaryComponent } from './gsb-store-banner-activity-summary.component';

describe('BannerActivitySummaryComponent', () => {
  let component: BannerActivitySummaryComponent;
  let fixture: ComponentFixture<BannerActivitySummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerActivitySummaryComponent],
    });
    fixture = TestBed.createComponent(BannerActivitySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
