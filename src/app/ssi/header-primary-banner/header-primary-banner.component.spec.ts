import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrimaryBannerComponent } from './header-primary-banner.component';

describe('HeaderPrimaryBannerComponent', () => {
  let component: HeaderPrimaryBannerComponent;
  let fixture: ComponentFixture<HeaderPrimaryBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPrimaryBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPrimaryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
