import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketLayoutMarketComponent } from './gsb-market-layout.component';

describe('GsbMarketLayoutMarketComponent', () => {
  let component: GsbMarketLayoutMarketComponent;
  let fixture: ComponentFixture<GsbMarketLayoutMarketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketLayoutMarketComponent],
    });
    fixture = TestBed.createComponent(GsbMarketLayoutMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
