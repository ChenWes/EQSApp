import { connect } from 'react-redux';
import FinallyCheckComponent from '../components/check/finallyCheck';
import { userLoginAction } from '../actions/user';

const mapStateToProps = (state) => {
    return {
        userEntity: state.userReducer,
        finallyCheckEntity: state.finallyCheckReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUserLogin: (userParams) => {
            dispatch(userLoginAction(userParams));
        }
    }
}

const FinallyCheckContainer = connect(mapStateToProps, mapDispatchToProps)(FinallyCheckComponent);
export default FinallyCheckContainer;