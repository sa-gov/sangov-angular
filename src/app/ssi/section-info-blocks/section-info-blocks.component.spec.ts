import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInfoBlocksComponent } from './section-info-blocks.component';

describe('SectionInfoBlocksComponent', () => {
  let component: SectionInfoBlocksComponent;
  let fixture: ComponentFixture<SectionInfoBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionInfoBlocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionInfoBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
