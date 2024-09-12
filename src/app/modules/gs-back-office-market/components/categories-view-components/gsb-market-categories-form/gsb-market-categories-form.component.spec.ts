import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketCategoriesFormComponent } from './gsb-market-categories-form.component';

describe('GsbMarketCategoriesFormComponent', () => {
  let component: GsbMarketCategoriesFormComponent;
  let fixture: ComponentFixture<GsbMarketCategoriesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketCategoriesFormComponent]
    });
    fixture = TestBed.createComponent(GsbMarketCategoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
