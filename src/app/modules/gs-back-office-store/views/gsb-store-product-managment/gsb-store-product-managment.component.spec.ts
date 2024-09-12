import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagmentComponent } from './gsb-store-product-managment.component';

describe('ProductManagmentComponent', () => {
  let component: ProductManagmentComponent;
  let fixture: ComponentFixture<ProductManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductManagmentComponent],
    });
    fixture = TestBed.createComponent(ProductManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
