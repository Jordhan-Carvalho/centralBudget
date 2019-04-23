import { login, logout } from '../../actions/auth';


test('should login a user', () => {
    const uid = '12';
    const result = login(uid);
    expect(result).toEqual({
        type: 'LOGIN',
    uid: '12'
    });
});

test('should logout a user', () => {
    const result = logout();
    expect(result).toEqual({
        type: 'LOGOUT'
    });
});