import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServiceGroupComponent } from './section-service-group.component';

describe('SectionServiceGroupComponent', () => {
  let component: SectionServiceGroupComponent;
  let fixture: ComponentFixture<SectionServiceGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServiceGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionServiceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
