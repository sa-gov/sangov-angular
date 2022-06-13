import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingFullWidthComponent } from './branding-full-width.component';

describe('BrandingFullWidthComponent', () => {
  let component: BrandingFullWidthComponent;
  let fixture: ComponentFixture<BrandingFullWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandingFullWidthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandingFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
