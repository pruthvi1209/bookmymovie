import * as fromActions from './home.action';
import { Action } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { EMovieActionTypes } from './home.action';

describe('Movie Actions', () => {
  it('should create an action', () => {
    const payload = [
      {
        id: 1,
        title: '',
        popularity: '',
        poster_path: '',
        release_date: '',
        original_language: '',
        overview: '',
        genre_ids: '',
        vote_average: 1,
        vote_count: 2
      }
    ];

    const action = new fromActions.SetNowPlayingMovies(payload);

    expect({ ...action }).toEqual({
      type: EMovieActionTypes.SET_NOW_PLAYING_MOVIES,
      payload
    });
  });
  it('should create an action- theatre', () => {
    const payload = [
      {
        id: 1,
        title: '',
        popularity: '',
        poster_path: '',
        release_date: '',
        original_language: '',
        overview: '',
        genre_ids: '',
        vote_average: 1,
        vote_count: 2
      }
    ];

    const action = new fromActions.SetTheaters(payload);

    expect({ ...action }).toEqual({
      type: EMovieActionTypes.SET_THEATERS,
      payload
    });
  });
  it('should create an action- theatre', () => {
    const payload = [
      {
        id: 1,
        title: '',
        popularity: '',
        poster_path: '',
        release_date: '',
        original_language: '',
        overview: '',
        genre_ids: '',
        vote_average: 1,
        vote_count: 2
      }
    ];

    const action = new fromActions.SetUpcomingMovies(payload);

    expect({ ...action }).toEqual({
      type: EMovieActionTypes.SET_UPCOMING_MOVIES,
      payload
    });
  });
  it('should create an action- theatre', () => {
    const payload = [
      {
        id: 1,
        title: '',
        popularity: '',
        poster_path: '',
        release_date: '',
        original_language: '',
        overview: '',
        genre_ids: '',
        vote_average: 1,
        vote_count: 2
      }
    ];

    const action = new fromActions.SetCastAndCrew(payload);

    expect({ ...action }).toEqual({
      type: EMovieActionTypes.SET_CAST_AND_CREW,
      payload
    });
  });
});
