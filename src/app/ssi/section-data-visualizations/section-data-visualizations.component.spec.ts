import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDataVisualizationsComponent } from './section-data-visualizations.component';

describe('SectionDataVisualizationsComponent', () => {
  let component: SectionDataVisualizationsComponent;
  let fixture: ComponentFixture<SectionDataVisualizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDataVisualizationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDataVisualizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
