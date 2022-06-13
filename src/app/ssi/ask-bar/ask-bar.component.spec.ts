import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskBarComponent } from './ask-bar.component';

describe('AskBarComponent', () => {
  let component: AskBarComponent;
  let fixture: ComponentFixture<AskBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
