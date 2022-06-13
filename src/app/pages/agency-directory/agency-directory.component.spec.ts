import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyDirectoryComponent } from './agency-directory.component';

describe('AgencyDirectoryComponent', () => {
  let component: AgencyDirectoryComponent;
  let fixture: ComponentFixture<AgencyDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
