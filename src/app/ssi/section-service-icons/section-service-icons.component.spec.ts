import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServiceIconsComponent } from './section-service-icons.component';

describe('SectionServiceIconsComponent', () => {
  let component: SectionServiceIconsComponent;
  let fixture: ComponentFixture<SectionServiceIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServiceIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionServiceIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
