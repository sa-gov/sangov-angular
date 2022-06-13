import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleCseComponent } from './google-cse.component';

describe('GoogleCseComponent', () => {
  let component: GoogleCseComponent;
  let fixture: ComponentFixture<GoogleCseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleCseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleCseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
