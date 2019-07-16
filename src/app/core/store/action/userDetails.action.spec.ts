import * as fromActions from './userDetails.action';



describe('User Details Actions', () => {
    describe('SetUser', () => {
        it('should create an action', () => {
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
                    theater: [],
                },
                rating: {
                    movieId: '',
                    rating: ''
                }

            };

            const action = new fromActions.SetUser(payload);

            expect({ ...action }).toEqual({
                type: fromActions.UserLogged.SET_USER,
                payload
            });
        });
    });
    describe('RemoveUser', () => {
        it('should create an action', () => {

            const action = new fromActions.RemoveUser();

            expect({ ...action }).toEqual({
                type: fromActions.UserLogged.REMOVE_USER
            });
        });
    });
});
