import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MovieDescriptionComponent } from './movie-description.component';

describe('MovieDescriptionComponent', () => {
  let comp: MovieDescriptionComponent;
  let fixture: ComponentFixture<MovieDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDescriptionComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(MovieDescriptionComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });
  describe('Onint', () => {
    it('makes expected calls', () => {
      spyOn(comp, 'ngOnInit').and.callThrough();
      fixture.detectChanges();
      expect(comp.ngOnInit).toHaveBeenCalled();
    });
  });
});
