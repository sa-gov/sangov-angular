import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMobileGalleryComponent } from './section-mobile-gallery.component';

describe('SectionMobileGalleryComponent', () => {
  let component: SectionMobileGalleryComponent;
  let fixture: ComponentFixture<SectionMobileGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMobileGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMobileGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
