import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketHeaderComponent } from './gsb-market-header.component';

describe('GsbMarketHeaderComponent', () => {
  let component: GsbMarketHeaderComponent;
  let fixture: ComponentFixture<GsbMarketHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketHeaderComponent]
    });
    fixture = TestBed.createComponent(GsbMarketHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
