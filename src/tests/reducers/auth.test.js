import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
const action = { type: 'LOGIN', uid: '1234'};
const state = authReducer({} ,action);
expect(state.uid).toEqual(action.uid);
});

test('should logout the user', () => {
    const action = {type:'LOGOUT'};
    const state = authReducer({uid: 'anything'}, action);
    expect(state).toEqual({});
});