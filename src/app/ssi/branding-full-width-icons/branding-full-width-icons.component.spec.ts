import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingFullWidthIconsComponent } from './branding-full-width-icons.component';

describe('BrandingFullWidthIconsComponent', () => {
  let component: BrandingFullWidthIconsComponent;
  let fixture: ComponentFixture<BrandingFullWidthIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandingFullWidthIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandingFullWidthIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
