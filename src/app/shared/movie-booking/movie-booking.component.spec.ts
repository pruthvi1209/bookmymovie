import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MovieBookingComponent } from './movie-booking.component';

describe('MovieBookingComponent', () => {
  let comp: MovieBookingComponent;
  let fixture: ComponentFixture<MovieBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieBookingComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(MovieBookingComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('theaters defaults to: []', () => {
    const theaters = [
      {
        name: 'ABC',
        location: 'asdas',
        timings: ['2:00', '6:00', '9:00', '11:00']
      }
    ];
    expect(comp.theaters).toEqual(theaters);
  });
  describe('Onint', () => {
    it('makes expected calls', () => {
      spyOn(comp, 'ngOnInit').and.callThrough();
      fixture.detectChanges();
      // expect(comp.ngOnInit).toHaveBeenCalled();
    });
  });
});
