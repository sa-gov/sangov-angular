import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGreenBuildingsComponent } from './section-green-buildings.component';

describe('SectionGreenBuildingsComponent', () => {
  let component: SectionGreenBuildingsComponent;
  let fixture: ComponentFixture<SectionGreenBuildingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionGreenBuildingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionGreenBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
