import { USER_LOGIN, USER_LOGIN_COMPLETED, USER_LOGIN_FAIL } from '../actions/actionTypes/user';
import { user_login_url } from '../config';

function* fetchUserLogin(userParams) {
    try {
        const userEntity = yield HttpAPI.PostDataToAPI_WithOutToken(user_login_url.replace(':lng', I18n.locale), userParams.userParams);

        if (userEntity.resultType == 'SUCCESS') {
            //保存当前的用户信息
            let userData = {
                usercode: userParams.userParams.employeeID,
                username: userEntity.results.user.username
            }
            //保存密码，下次直接登陆
            storage.save({
                key: USER_STORAGE_KEY,  // 注意:请不要在key中使用_下划线符号!                
                data: userData,
                // 如果不指定过期时间，则会使用defaultExpires参数
                // 如果设为null，则永不过期
                expires: null
            });


            yield put({ type: USER_LOGIN_SUCCESSED, userEntity: userEntity.results });

            Actions.Home();
        } else {
            if (userEntity.resultMsg) {
                throw new Error(userEntity.resultMsg);
            } else {
                throw new Error('Unknow Error');
            }
        }
    } catch (err) {
        yield put({ type: USER_LOGIN_FAILED, error: err });
    }
}

export function* watchUserLogin() {
    yield takeLatest(USER_LOGIN, fetchUserLogin);
}