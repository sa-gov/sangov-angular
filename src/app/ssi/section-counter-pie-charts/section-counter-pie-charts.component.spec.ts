import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCounterPieChartsComponent } from './section-counter-pie-charts.component';

describe('SectionCounterPieChartsComponent', () => {
  let component: SectionCounterPieChartsComponent;
  let fixture: ComponentFixture<SectionCounterPieChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCounterPieChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCounterPieChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
