import { connect } from 'react-redux';
import UserLoginComponent from '../components/user/userLogin';
import { userLoginAction } from '../actions/user';

const mapStateToProps = (state) => {
    return {
        userEntity: state.userReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUserLogin: (userParams) => {
            dispatch(userLoginAction(userParams));
        }
    }
}

const UserLoginContainer = connect(mapStateToProps, mapDispatchToProps)(UserLoginComponent);
export default UserLoginContainer;