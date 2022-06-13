import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRelatedLinksComponent } from './section-related-links.component';

describe('SectionRelatedLinksComponent', () => {
  let component: SectionRelatedLinksComponent;
  let fixture: ComponentFixture<SectionRelatedLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionRelatedLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionRelatedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
