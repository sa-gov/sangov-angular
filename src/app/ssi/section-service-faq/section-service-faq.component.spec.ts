import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServiceFaqComponent } from './section-service-faq.component';

describe('SectionServiceFaqComponent', () => {
  let component: SectionServiceFaqComponent;
  let fixture: ComponentFixture<SectionServiceFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServiceFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionServiceFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
