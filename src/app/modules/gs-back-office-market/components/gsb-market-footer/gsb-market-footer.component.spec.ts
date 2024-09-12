import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketFooterComponent } from './gsb-market-footer.component';

describe('GsbMarketFooterComponent', () => {
  let component: GsbMarketFooterComponent;
  let fixture: ComponentFixture<GsbMarketFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketFooterComponent]
    });
    fixture = TestBed.createComponent(GsbMarketFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
