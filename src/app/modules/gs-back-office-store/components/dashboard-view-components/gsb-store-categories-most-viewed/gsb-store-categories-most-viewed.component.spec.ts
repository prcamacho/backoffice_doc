import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesMostViewedComponent } from './gsb-store-categories-most-viewed.component';

describe('CategoriesMostViewedComponent', () => {
  let component: CategoriesMostViewedComponent;
  let fixture: ComponentFixture<CategoriesMostViewedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesMostViewedComponent],
    });
    fixture = TestBed.createComponent(CategoriesMostViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
