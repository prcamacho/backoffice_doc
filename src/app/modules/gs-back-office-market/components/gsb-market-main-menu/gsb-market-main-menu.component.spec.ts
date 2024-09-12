import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketMainMenuComponent } from './gsb-market-main-menu.component';

describe('GsbMarketMainMenuComponent', () => {
  let component: GsbMarketMainMenuComponent;
  let fixture: ComponentFixture<GsbMarketMainMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketMainMenuComponent],
    });
    fixture = TestBed.createComponent(GsbMarketMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
