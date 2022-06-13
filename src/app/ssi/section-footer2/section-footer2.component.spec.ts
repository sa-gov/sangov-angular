import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFooter2Component } from './section-footer2.component';

describe('SectionFooter2Component', () => {
  let component: SectionFooter2Component;
  let fixture: ComponentFixture<SectionFooter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFooter2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionFooter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
