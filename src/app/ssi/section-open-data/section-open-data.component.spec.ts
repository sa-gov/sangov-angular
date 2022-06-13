import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOpenDataComponent } from './section-open-data.component';

describe('SectionOpenDataComponent', () => {
  let component: SectionOpenDataComponent;
  let fixture: ComponentFixture<SectionOpenDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOpenDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOpenDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
