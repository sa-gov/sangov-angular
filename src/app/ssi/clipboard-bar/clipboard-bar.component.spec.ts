import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardBarComponent } from './clipboard-bar.component';

describe('ClipboardBarComponent', () => {
  let component: ClipboardBarComponent;
  let fixture: ComponentFixture<ClipboardBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClipboardBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipboardBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
