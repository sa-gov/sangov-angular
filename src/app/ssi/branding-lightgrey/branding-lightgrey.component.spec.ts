import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingLightgreyComponent } from './branding-lightgrey.component';

describe('BrandingLightgreyComponent', () => {
  let component: BrandingLightgreyComponent;
  let fixture: ComponentFixture<BrandingLightgreyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandingLightgreyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandingLightgreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
