import { TestBed } from '@angular/core/testing';
import { SearchApiService } from './search-api.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { nowPlayingMoviesSelector } from '../../reducers';

describe('SearchApiService', () => {
  let service: SearchApiService;
  let httpClientSpy: { get: jasmine.Spy };
  const moviesList = {
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [SearchApiService, HttpClient]
    });
    service = TestBed.get(SearchApiService);
  });

  it('can load instance', () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SearchApiService(<any>httpClientSpy);
    expect(service).toBeTruthy();
  });

  it('#getMovies- search', () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SearchApiService(<any>httpClientSpy);
    httpClientSpy.get.and.callThrough();
    expect(service.getMovies('eng')).toBeUndefined();
  });

  it('#searchMovieFromStore- search api', () => {
    const movie = [
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
      }
    ];
    expect(service.searchMovieFromStore(moviesList.results, 'Aqu')).toEqual(movie);
  });
});
