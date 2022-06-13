import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSingleBannerComponent } from './header-single-banner.component';

describe('HeaderSingleBannerComponent', () => {
  let component: HeaderSingleBannerComponent;
  let fixture: ComponentFixture<HeaderSingleBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSingleBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSingleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
