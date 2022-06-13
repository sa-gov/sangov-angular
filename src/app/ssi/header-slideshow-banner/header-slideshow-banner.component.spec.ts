import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSlideshowBannerComponent } from './header-slideshow-banner.component';

describe('HeaderSlideshowBannerComponent', () => {
  let component: HeaderSlideshowBannerComponent;
  let fixture: ComponentFixture<HeaderSlideshowBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSlideshowBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSlideshowBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
