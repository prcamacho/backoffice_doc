import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbStoreHeaderComponent } from './gsb-store-header.component';

describe('GsbStoreHeaderComponent', () => {
  let component: GsbStoreHeaderComponent;
  let fixture: ComponentFixture<GsbStoreHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbStoreHeaderComponent],
    });
    fixture = TestBed.createComponent(GsbStoreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
