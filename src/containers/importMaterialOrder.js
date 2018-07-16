import { connect } from 'react-redux';
import ImportMaterialOrderComponent from '../components/check/importMaterialOrder';
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

const ImportMaterialOrderContainer = connect(mapStateToProps, mapDispatchToProps)(ImportMaterialOrderComponent);
export default ImportMaterialOrderContainer;