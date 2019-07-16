import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieListService } from '../../../core/movie/movie-list.service';
import { HomeService } from '../../../home/services/home.service';
import { SegregateMovieService } from '../../services/segregate-movie.service';
import { SearchApiService } from '../../services/search-api.service';
import { SDialogComponent } from './s-dialog.component';

describe('SDialogComponent', () => {
  let comp: SDialogComponent;
  let fixture: ComponentFixture<SDialogComponent>;

  beforeEach(() => {
    const storeStub = {
      select: () => ({
        subscribe: () => ({})
      })
    };
    const movieListServiceStub = {
      getLanguageList: () => ({})
    };
    const homeServiceStub = {
      getGenres: () => ({
        subscribe: () => ({})
      })
    };
    const segregateMovieServiceStub = {
      getSortedbyLanguage: () => ({})
    };
    const searchApiServiceStub = {
      getMovies: () => ({
        subscribe: () => ({})
      }),
      searchMovieFromStore: () => ({})
    };
    TestBed.configureTestingModule({
      declarations: [SDialogComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Store, useValue: storeStub },
        { provide: MovieListService, useValue: movieListServiceStub },
        { provide: HomeService, useValue: homeServiceStub },
        { provide: SegregateMovieService, useValue: segregateMovieServiceStub },
        { provide: SearchApiService, useValue: searchApiServiceStub }
      ]
    });
    fixture = TestBed.createComponent(SDialogComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('moviesList defaults to: []', () => {
    expect(comp.moviesList).toEqual([]);
  });

  it('genresList defaults to: []', () => {
    expect(comp.genresList).toEqual([]);
  });

  it('originalMovieList defaults to: []', () => {
    expect(comp.originalMovieList).toEqual([]);
  });

  it('lang defaults to: en', () => {
    expect(comp.lang).toEqual('en');
  });

  it('selectedLanguage defaults to: en', () => {
    expect(comp.selectedLanguage).toEqual('en');
  });

  it('movieObjArray defaults to: []', () => {
    expect(comp.movieObjArray).toEqual([]);
  });

  it('changeGenere', () => {
    comp.changeGenere();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const storeStub = fixture.debugElement.injector.get(Store);
      const movieListServiceStub: MovieListService = fixture.debugElement.injector.get(MovieListService);
      const homeServiceStub: HomeService = fixture.debugElement.injector.get(HomeService);
      const segregateMovieServiceStub: SegregateMovieService = fixture.debugElement.injector.get(SegregateMovieService);
      const searchApiServiceStub: SearchApiService = fixture.debugElement.injector.get(SearchApiService);
      spyOn(storeStub, 'select');
      spyOn(movieListServiceStub, 'getLanguageList');
      spyOn(homeServiceStub, 'getGenres');
      spyOn(segregateMovieServiceStub, 'getSortedbyLanguage');
      spyOn(searchApiServiceStub, 'getMovies');
      spyOn(searchApiServiceStub, 'searchMovieFromStore');
      comp.ngOnInit();
      expect(storeStub.select).toHaveBeenCalled();
      expect(movieListServiceStub.getLanguageList).toHaveBeenCalled();
      expect(homeServiceStub.getGenres).toHaveBeenCalled();
      expect(segregateMovieServiceStub.getSortedbyLanguage).toHaveBeenCalled();
      expect(searchApiServiceStub.getMovies).toHaveBeenCalled();
      expect(searchApiServiceStub.searchMovieFromStore).toHaveBeenCalled();
    });
  });
});
