import { connect } from 'react-redux';
import ImportMaterialCheckComponent from '../components/check/importMaterialCheck';
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

const ImportMaterialCheckContainer = connect(mapStateToProps, mapDispatchToProps)(ImportMaterialCheckComponent);
export default ImportMaterialCheckContainer;