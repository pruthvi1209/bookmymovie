import * as fromHome from './home.reducer';
import * as fromActions from './../actions/home.action';
import { Movie } from '../../models/movie.model';

describe('HomeReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialMovieState } = fromHome;
      const action = {} as any;
      const state = fromHome.moviesReducer(undefined, action);

      expect(state).toBe(initialMovieState);
    });
  });
  describe('Movie Home action', () => {
    it('should set Movie', () => {
      const { initialMovieState } = fromHome;
      const payload = [];
      const action = new fromActions.SetNowPlayingMovies(payload);
      const state = fromHome.moviesReducer(initialMovieState, action);

      expect(state.nowPlayingMovies).toEqual([]);
    });
    it('should set Movie', () => {
      const { initialMovieState } = fromHome;
      const payload = [];
      const action = new fromActions.SetNowPlayingMovies(payload);
      const state = fromHome.moviesReducer(initialMovieState, action);

      expect(state.nowPlayingMovies).toEqual([]);
    });
    it('should set Theater', () => {
      const { initialMovieState } = fromHome;
      const payload = [];
      const action = new fromActions.SetTheaters(payload);
      const state = fromHome.moviesReducer(initialMovieState, action);

      expect(state.setTheaters).toEqual([]);
    });

    it('should set SetUpcomingMovies', () => {
      const { initialMovieState } = fromHome;
      const payload = [];
      const action = new fromActions.SetUpcomingMovies(payload);
      const state = fromHome.moviesReducer(initialMovieState, action);

      expect(state.upcomingMovies).toEqual([]);
    });
    it('should set SetCastAndCrew', () => {
      const { initialMovieState } = fromHome;
      const payload = [];
      const action = new fromActions.SetCastAndCrew(payload);
      const state = fromHome.moviesReducer(initialMovieState, action);

      expect(state.nowPlayingMovies).toEqual(Object({}));
      expect(state.upcomingMovies).toEqual(Object({}));
    });
  });
});
