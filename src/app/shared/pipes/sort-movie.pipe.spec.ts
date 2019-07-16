import { SortMoviePipe } from './sort-movie.pipe';

describe('SortMoviePipe', () => {
  let pipe: SortMoviePipe;

  beforeEach(() => {
    pipe = new SortMoviePipe();
  });

  it('transforms X to Y', () => {
    const value: any = 'X';
    const args: string[] = [];

    expect(pipe.transform(value, args)).toEqual(['X']);
  });

  it('transforms X to Y-empty list ', () => {
    const movieList: any = [];
    const userPref: string[] = [];
    expect(pipe.transform(movieList, userPref)).toBeUndefined();
  });
  it('transforms X to Y-empty list ', () => {
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
    const userPref: string[] = [];
    expect(pipe.transform(movieList, userPref)).toEqual(movieList);
  });
  it('transforms X to Y-empty list ', () => {
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
    const userPref = '';
    expect(pipe.transform(movieList, userPref)).toEqual(movieList);
  });
  it('transforms X to Y-empty list ', () => {
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
    const genre = [{ id: 297802, name: 'Action' }, { id: 12, name: 'Adventure' }, { id: 16, name: 'Animation' }];
    const language = [{ name: 'English', value: 'en' }];
    const userPref = { genre, language };
    expect(pipe.transform(movieList, userPref)).toEqual(movieList);
  });
  it('transforms genre -empty list ', () => {
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
    const genre = [];
    const language = [{ name: 'English', value: 'en' }];
    const userPref = { genre, language };
    expect(pipe.transform(movieList, userPref)).toEqual([]);
  });
  it('transforms genre -empty list ', () => {
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
    const genre = [{ id: 297802, name: 'Action' }];
    const language = [];
    const userPref = { genre, language };
    // expect(pipe.transform(movieList, userPref)).toEqual([]);
  });
});
