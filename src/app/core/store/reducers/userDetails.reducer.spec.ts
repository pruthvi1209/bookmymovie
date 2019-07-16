import * as fromUser from './userDetails.reducer';
import * as fromActions from './../action/userDetails.action';
import { User } from '../../models/user.model';

describe('UserReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialUserState } = fromUser;
      const action = {} as any;
      const state = fromUser.userReducer(undefined, action);

      expect(state).toBe(initialUserState);
    });
  });
  describe('User action', () => {
    it('should set Movie', () => {
      const { initialUserState } = fromUser;
      const payload = {
        id: '',
        name: '',
        email: '',
        image: '',
        token: '',
        role: '',
        preference: {
          language: '',
          genre: [],
          theater: []
        },
        rating: {
          movieId: '',
          rating: ''
        }
      };
      const action = new fromActions.SetUser(payload);
      const state = fromUser.userReducer(initialUserState, action);
      expect(state.user).toEqual(payload);
    });

    it('should set REMOVE_USER', () => {
      const { initialUserState } = fromUser;
      const payload = {
        id: '',
        name: '',
        email: '',
        image: '',
        token: '',
        role: '',
        preference: {
          language: '',
          genre: [],
          theater: []
        },
        rating: {
          movieId: '',
          rating: ''
        }
      };
      const action = new fromActions.RemoveUser();
      const state = fromUser.userReducer(initialUserState, action);
      expect(state.user).toEqual(payload);
    });
  });
});
