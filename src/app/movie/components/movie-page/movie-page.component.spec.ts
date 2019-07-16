import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MoviePageComponent } from './movie-page.component';
import { TMDB_URLS } from '../../../shared/config';

describe('MoviePageComponent', () => {
  let comp: MoviePageComponent;
  let fixture: ComponentFixture<MoviePageComponent>;
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
    TestBed.configureTestingModule({
      declarations: [MoviePageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: MatDialog, useValue: matDialogStub }]
    });
    fixture = TestBed.createComponent(MoviePageComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('imagesPath defaults to: TMDB_URLS.IMAGE_URL', () => {
    expect(comp.imagesPath).toEqual(TMDB_URLS.IMAGE_URL);
  });

  it('rating defaults to: [5]', () => {
    expect(comp.rating).toEqual([true, true, true, true, false]);
  });

  describe('openDialog', () => {
    it('makes expected calls', () => {
      const movie = {
        title: 'test'
      };
      const selectedTheater = { name: name };
      comp.movieDescription = movie;
      comp.selectedTheater = selectedTheater;
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(MatDialog);
      comp.openDialog();
      spyOn(matDialogStub, 'open');
      fixture.detectChanges();
      // expect(matDialogStub.open).toHaveBeenCalled();
    });
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
  it('trackCastandCrew if cast id ', () => {
    const cast = {
      id: '1234'
    };
    expect(comp.trackCastandCrew(8, cast)).toEqual(cast.id);
  });

  it('trackCastandCrew else cast ID is null', () => {
    expect(comp.trackCastandCrew('', '')).toBe(-1);
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
