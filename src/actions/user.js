import {
    USER_LOGIN, USER_LOGIN_COMPLETED, USER_LOGIN_FAIL,
    USER_LOGOUT
} from './actionTypes/user';


export const userLoginAction = (userParams) => {
    return {
        type: USER_LOGIN,
        userParams
    }
}