import {
    USER_LOGIN, USER_LOGIN_COMPLETED, USER_LOGIN_FAIL,
    USER_LOGOUT,
} from '../actions/actionTypes/user';

let initUser = {
    isAuthenticated: false,
    isLogin: false,
    token: '',
    user: {},
    loginError: {}
}

export default userReducer = (state = initUser, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, state, {
                isLogin: true
            })
        case USER_LOGIN_COMPLETED:
            return Object.assign({}, state, {
                isLogin: false
            })
        default:
            return state;
    }
}