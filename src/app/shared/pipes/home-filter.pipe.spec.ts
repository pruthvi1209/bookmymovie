import { HomeFilterPipe } from './home-filter.pipe';

describe('HomeFilterPipe', () => {
  let pipe: HomeFilterPipe;

  beforeEach(() => {
    pipe = new HomeFilterPipe();
  });

  it('transforms X to Y= check 2', () => {
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
    const args = 'en';
    const genreInput = ''; // {value :'en'}
    expect(pipe.transform(movieList, genreInput, args)).toEqual(movieList);
  });
  it('transforms X to Y= check 4', () => {
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
    const args = 'en';
    const genreInput = {}; // {value :'en'}
    expect(pipe.transform(movieList, genreInput, args)).toEqual([]);
  });
  it('transforms X to Y- empty movielist', () => {
    const movieList: any = '';
    const args = 'en';
    const genreInput = ''; // {value :'en'}
    expect(pipe.transform(movieList, genreInput, args)).toBeUndefined();
  });
  it('transforms X to Y- check3', () => {
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
    const args = '';
    const breaker = 1;
    expect(pipe.transform(movieList, args)).toEqual([]);
  });
  it('transforms X to Y-check1', () => {
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
    const breaker = 1;
    const lang = '';
    const genreInput = { value: '' };
    expect(pipe.transform(movieList, genreInput, lang)).toEqual(movieList);
  });
  it('transforms X to Y- check3', () => {
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
    const args = 'en';
    const breaker = 1;
    expect(pipe.transform(movieList, '', args)).toEqual(movieList);
  });
  it('transforms X to Y- check4', () => {
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
    const breaker = 1;
    expect(pipe.transform(movieList, '', '')).toEqual(movieList);
  });
});
