import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIconBlocksComponent } from './section-icon-blocks.component';

describe('SectionIconBlocksComponent', () => {
  let component: SectionIconBlocksComponent;
  let fixture: ComponentFixture<SectionIconBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionIconBlocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionIconBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
