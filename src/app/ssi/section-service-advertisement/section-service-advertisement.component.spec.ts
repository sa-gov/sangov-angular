import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServiceAdvertisementComponent } from './section-service-advertisement.component';

describe('SectionServiceAdvertisementComponent', () => {
  let component: SectionServiceAdvertisementComponent;
  let fixture: ComponentFixture<SectionServiceAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServiceAdvertisementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionServiceAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
