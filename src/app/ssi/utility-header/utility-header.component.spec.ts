import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityHeaderComponent } from './utility-header.component';

describe('UtilityHeaderComponent', () => {
  let component: UtilityHeaderComponent;
  let fixture: ComponentFixture<UtilityHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
