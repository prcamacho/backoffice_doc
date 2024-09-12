import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketBannersComponent } from './gsb-market-banners.component';

describe('GsbMarketBannersComponent', () => {
  let component: GsbMarketBannersComponent;
  let fixture: ComponentFixture<GsbMarketBannersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketBannersComponent]
    });
    fixture = TestBed.createComponent(GsbMarketBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
