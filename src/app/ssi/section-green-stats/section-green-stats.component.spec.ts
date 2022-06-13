import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGreenStatsComponent } from './section-green-stats.component';

describe('SectionGreenStatsComponent', () => {
  let component: SectionGreenStatsComponent;
  let fixture: ComponentFixture<SectionGreenStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionGreenStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionGreenStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
