import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsStandaloneComponent } from './search-results-standalone.component';

describe('SearchResultsStandaloneComponent', () => {
  let component: SearchResultsStandaloneComponent;
  let fixture: ComponentFixture<SearchResultsStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultsStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultsStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
