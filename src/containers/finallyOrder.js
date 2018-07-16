import { connect } from 'react-redux';
import FinallyOrderComponent from '../components/check/finallyOrder';
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

const FinallyOrderContainer = connect(mapStateToProps, mapDispatchToProps)(FinallyOrderComponent);
export default FinallyOrderContainer;