import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersComponent } from './gsb-store-banners.component';

describe('BannersComponent', () => {
  let component: BannersComponent;
  let fixture: ComponentFixture<BannersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannersComponent],
    });
    fixture = TestBed.createComponent(BannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
