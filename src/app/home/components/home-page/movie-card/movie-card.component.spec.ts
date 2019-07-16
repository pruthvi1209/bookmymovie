import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../../../material.module';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MovieCardComponent } from './movie-card.component';
import { TMDB_URLS } from '../../../../shared/config';
import { Movie } from '../../../../movie/models/movie.model';

describe('MovieCardComponent', () => {
  let comp: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  const theater = {
    theaters: [
      {
        tid: 'T1',
        name: 'Sree Vinayaka Theaters',
        addr: '12th Cross, Kormangala',
        geoCo: ['41.2412', '2.1026'],
        rating: '3.8',
        shows: ['11:00', '16:00', '21:00'],
        capacity: '35',
        city: ['Bangalore'],
        movies: [910, 718, 189]
      },
      {
        tid: 'T2',
        name: 'ABC Movies',
        addr: 'Opp. State Bank, RR Nagar',
        geoCo: ['46.2412', '21.1026'],
        rating: '3.8',
        shows: ['11:00', '16:00', '21:00', '23:00'],
        capacity: '35',
        city: ['Bangalore'],
        movies: [889, 718, 189]
      },
      {
        tid: 'T3',
        name: 'Savita Film City',
        addr: 'Nr XYZ cross road',
        geoCo: ['41.2412', '2.1026'],
        rating: '3.8',
        shows: ['10:00', '16:00', '20:00'],
        capacity: '35',
        city: ['Kannur'],
        movies: [910, 718, 189]
      },
      {
        tid: 'T4',
        name: 'M4Movie',
        addr: 'Bayipanahalli',
        geoCo: ['41.2412', '2.1026'],
        rating: '3.8',
        shows: ['11:00', '16:00', '21:00'],
        capacity: '35',
        city: ['Bangalore'],
        movies: [910, 718, 189]
      },
      {
        tid: 'T5',
        name: 'IMAX PEPSI',
        addr: 'Opp. Christ C, Kormangala',
        geoCo: ['41.2412', '2.1026'],
        rating: '3.8',
        shows: ['11:00', '16:00', '21:00', '23:00'],
        capacity: '35',
        city: ['Bangalore'],
        movies: [910, 718, 189]
      },
      {
        tid: 'T6',
        name: 'Cinema Times',
        addr: 'Bapuji Nagar',
        geoCo: ['41.2412', '2.1026'],
        rating: '3.8',
        shows: ['11:00', '15:00', '22:00'],
        capacity: '35',
        city: ['Bangalore'],
        movies: [910, 718, 189]
      },
      {
        tid: 'T8',
        name: 'Great Cinemas',
        addr: 'Downtown',
        geoCo: ['41.2412', '2.1026'],
        rating: '3.8',
        shows: ['11:00', '16:00', '21:00'],
        capacity: '35',
        city: ['Kannur'],
        movies: [910, 718, 189]
      },
      {
        tid: 'T8',
        name: 'XY Cinema',
        addr: 'Chalad, Opp. Mosque',
        geoCo: ['41.2412', '2.1026'],
        rating: '3.8',
        shows: ['11:00', '19:00', '23:00'],
        capacity: '35',
        city: ['Kannur'],
        movies: [910, 718, 189]
      },
      {
        tid: 'T9',
        name: 'Ambili Movies',
        addr: 'Talap',
        geoCo: ['41.2412', '2.1026'],
        rating: '3.8',
        shows: ['11:00', '16:00', '21:00'],
        capacity: '35',
        city: ['Kannur'],
        movies: [910, 718, 189]
      },
      {
        tid: 'T10',
        name: 'Peacock Movies',
        addr: 'TM Nagar, Nr. McD',
        geoCo: ['41.2412', '2.1026'],
        rating: '3.8',
        shows: ['11:00', '16:00', '21:00'],
        capacity: '35',
        city: ['Chennai'],
        movies: [910, 718, 189]
      }
    ]
  };
  beforeEach(() => {
    const matDialogStub = {
      open: () => ({
        componentInstance: {},
        afterClosed: () => ({
          subscribe: () => ({})
        })
      })
    };
    const matDialogRefStub = {
      close: () => ({})
    };
    TestBed.configureTestingModule({
      imports: [MaterialModule, NoopAnimationsModule],
      declarations: [MovieCardComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: MatDialog, useValue: matDialogStub }]
    });
    fixture = TestBed.createComponent(MovieCardComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('imagesPath defaults to: TMDB_URLS.IMAGE_URL', () => {
    expect(comp.imagesPath).toEqual(TMDB_URLS.IMAGE_URL);
  });

  it('movieName defaults to: Robot 2.O', () => {
    expect(comp.movieName).toEqual('Robot 2.O');
  });

  it('rating defaults to: 4.7', () => {
    expect(comp.rating).toEqual(4.7);
  });

  it('totalReviews defaults to: 51', () => {
    expect(comp.totalReviews).toEqual(51);
  });

  describe('openDialog', () => {
    it('makes expected calls', () => {
      // const movie: Movie = {
      //   title: 'test',
      //   popularity: '22',
      //   id: 1232132,
      //   release_date: '01/23/2018',
      //   poster_path: '01/23/2018',
      //   overview: 'Good Movie'
      // };
      const movie = {
        title: 'test'
      };
      const selectedTheater = { name: name };
      comp.movie = movie;
      comp.selectedTheater = selectedTheater;
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(MatDialog);
      comp.openDialog();
      spyOn(matDialogStub, 'open');
      fixture.detectChanges();
    });
  });

  it('trackCastandCrew if cast id ', () => {
    const cast = {
      id: '1234'
    };
    expect(comp.trackCastandCrew(8, cast)).toEqual(cast.id);
  });

  it('trackCastandCrew else cast ID is null', () => {
    expect(comp.trackCastandCrew('', '')).toBe(-1);
  });
  it('onValChange', () => {
    comp.onValChange('6:30');
    expect(comp.selectedTime).toEqual('6:30');
  });
  it('isInvalid', () => {
    const selectedTheater = { name: 'America' };
    comp.selectedTheater = selectedTheater;
    comp.selectedTime = '6:30';
    comp.isInvalid();
    expect(comp.isInvalid()).toBeFalsy();
  });
  it('isInvalid - else', () => {
    const selectedTheater = {};
    comp.selectedTime = undefined;
    expect(comp.isInvalid()).toBeTruthy();
  });
  describe('OnChange', () => {
    it('OnChange- makes expected calls', () => {
      comp.theaterList = theater.theaters;
      spyOn(comp, 'ngOnChanges').and.callThrough();
      comp.ngOnChanges();
      fixture.detectChanges();
      // expect(comp.ngOnChanges).toHaveBeenCalled();
    });
  });
});
