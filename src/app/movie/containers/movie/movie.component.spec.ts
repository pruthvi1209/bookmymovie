import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieComponent } from './movie.component';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('MovieComponent', () => {
  let comp: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  const NowPlaying = {
    results: [
      {
        vote_count: 152,
        id: 297802,
        video: false,
        vote_average: 6.7,
        title: 'Aquaman',
        popularity: 435.245,
        poster_path: '/ydUpl3QkVUCHCq1VWvo2rW4Sf7y.jpg',
        original_language: 'en',
        original_title: 'Aquaman',
        genre_ids: [28, 14, 878, 12, 10749],
        backdrop_path: '/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg',
        adult: false,
        overview:
          // tslint:disable-next-line:max-line-length
          'The film reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime—one that will not only force him to face who he really is, but to discover if he is worthy of who he was born to be… a king.',
        release_date: '2018-12-07'
      },
      {
        vote_count: 3144,
        id: 335983,
        video: false,
        vote_average: 6.5,
        title: 'Venom',
        popularity: 246.219,
        poster_path: '/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
        original_language: 'en',
        original_title: 'Venom',
        genre_ids: [878],
        backdrop_path: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
        adult: false,
        overview:
          // tslint:disable-next-line:max-line-length
          'Eddie Brock is a reporter—investigating people who want to go unnoticed. But after he makes a terrible discovery at the Life Foundation, he begins to transform into ‘Venom’.  The Foundation has discovered creatures called symbiotes, and believes they’re the key to the next step in human evolution. Unwittingly bonded with one, Eddie discovers he has incredible new abilities—and a voice in his head that’s telling him to embrace the darkness.',
        release_date: '2018-10-03'
      }
    ],
    page: 1,
    total_results: 1001,
    dates: { maximum: '2018-12-20', minimum: '2018-11-02' },
    total_pages: 51
  };
  const movie = {
    vote_count: 3144,
    id: 335983,
    video: false,
    vote_average: 6.5,
    title: 'Venom',
    popularity: 246.219,
    poster_path: '/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
    original_language: 'en',
    original_title: 'Venom',
    genre_ids: [878],
    backdrop_path: '/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
    adult: false,
    overview:
      // tslint:disable-next-line:max-line-length
      'Eddie Brock is a reporter—investigating people who want to go unnoticed. But after he makes a terrible discovery at the Life Foundation, he begins to transform into ‘Venom’.  The Foundation has discovered creatures called symbiotes, and believes they’re the key to the next step in human evolution. Unwittingly bonded with one, Eddie discovers he has incredible new abilities—and a voice in his head that’s telling him to embrace the darkness.',
    release_date: '2018-10-03'
  };
  beforeEach(() => {
    const storeStub = {
      select: () => ({
        subscribe: () => ({})
      })
    };
    const activatedRouteStub = {
      params: {
        subscribe: () => ({})
      }
    };
    const movieServiceStub = {
      getMovie: () => ({
        subscribe: () => ({})
      }),
      getCastAndCrew: () => ({
        subscribe: () => ({})
      })
    };
    TestBed.configureTestingModule({
      declarations: [MovieComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Store, useValue: storeStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: MovieService, useValue: movieServiceStub },
        { provide: HttpClient, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(MovieComponent);
    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      comp.ngOnInit();
    });
    it('makes expected calls', () => {
      const storeStub = fixture.debugElement.injector.get(Store);
      comp.category = 'nowPlaying';
      const data = NowPlaying.results;
      comp.id = '297802';
      spyOn(storeStub, 'select').and.returnValue(of([data]));
      fixture.detectChanges();
      //   // tslint:disable-next-line:no-shadowed-variable
      storeStub.select().subscribe(() => results => {
        expect(results).toEqual([data]);
      });
    });
    it('makes expected calls', () => {
      const storeStub = fixture.debugElement.injector.get(Store);
      comp.category = 'upComing';
      const data = NowPlaying.results;
      comp.id = '297802';
      spyOn(storeStub, 'select').and.returnValue(of([data]));
      fixture.detectChanges();
      // tslint:disable-next-line:no-shadowed-variable
      storeStub.select().subscribe(() => results => {
        expect(results).toEqual([data]);
      });
    });
  });

  // describe('ngAfterContentInit', () => {
  //   it('get movie', () => {
  //     const id = 335983;
  //     const movieServiceStub: MovieService = fixture.debugElement.injector.get(MovieService);
  //     spyOn(movieServiceStub, 'getMovie').and.returnValue(of([movie]));
  //     fixture.detectChanges();
  //     //   // tslint:disable-next-line:no-shadowed-variable
  //     movieServiceStub.getMovie(id).subscribe(() => results => {
  //       expect(results).toEqual([movie]);
  //     });
  //     comp.ngAfterContentInit();
  //   });
  //   it('get cast and crew', () => {
  //     const id = 338952;
  //     const data = {
  //       casts: [
  //         { cast_id: 2, character: 'Newt Scamander' },
  //         { cast_id: 14, character: 'Porpentina Goldstein' },
  //         { cast_id: 15, character: 'Queenie Goldstein' }
  //       ],
  //       crews: [
  //         { cast_id: 2, character: 'Newt Scamander' },
  //         { cast_id: 14, character: 'Porpentina Goldstein' },
  //         { cast_id: 15, character: 'Queenie Goldstein' }
  //       ]
  //     };
  //     const movieServiceStub: MovieService = fixture.debugElement.injector.get(MovieService);
  //     spyOn(movieServiceStub, 'getCastAndCrew').and.returnValue(of([data]));
  //     fixture.detectChanges();
  //     //   // tslint:disable-next-line:no-shadowed-variable
  //     movieServiceStub.getCastAndCrew(id).subscribe(() => results => {
  //       expect(results).toEqual([data]);
  //     });
  //     comp.ngAfterContentInit();
  //   });
  // });
});
