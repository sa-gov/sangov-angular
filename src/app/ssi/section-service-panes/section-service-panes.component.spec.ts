import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServicePanesComponent } from './section-service-panes.component';

describe('SectionServicePanesComponent', () => {
  let component: SectionServicePanesComponent;
  let fixture: ComponentFixture<SectionServicePanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServicePanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionServicePanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
