import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieListService } from './movie-list.service';

describe('MovieListService', () => {
  let service: MovieListService;
  const movieList: any = [
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
      adult: false
    }
  ];

  it('getLanguageList', () => {
    service.getLanguageList(movieList);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [MovieListService, HttpClient, HttpTestingController]
    });
    service = TestBed.get(MovieListService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
