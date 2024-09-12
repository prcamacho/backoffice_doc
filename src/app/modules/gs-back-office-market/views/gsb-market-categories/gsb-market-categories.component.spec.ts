import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketCategoriesComponent } from './gsb-market-categories.component';

describe('GsbMarketCategoriesComponent', () => {
  let component: GsbMarketCategoriesComponent;
  let fixture: ComponentFixture<GsbMarketCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketCategoriesComponent],
    });
    fixture = TestBed.createComponent(GsbMarketCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
