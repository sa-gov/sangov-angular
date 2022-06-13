import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMobileComponent } from './search-mobile.component';

describe('SearchMobileComponent', () => {
  let component: SearchMobileComponent;
  let fixture: ComponentFixture<SearchMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
