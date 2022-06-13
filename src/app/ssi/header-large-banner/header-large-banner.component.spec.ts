import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLargeBannerComponent } from './header-large-banner.component';

describe('HeaderLargeBannerComponent', () => {
  let component: HeaderLargeBannerComponent;
  let fixture: ComponentFixture<HeaderLargeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLargeBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLargeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
