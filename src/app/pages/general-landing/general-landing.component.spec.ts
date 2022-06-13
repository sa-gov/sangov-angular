import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLandingComponent } from './general-landing.component';

describe('GeneralLandingComponent', () => {
  let component: GeneralLandingComponent;
  let fixture: ComponentFixture<GeneralLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
