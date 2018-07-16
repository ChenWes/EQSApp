import { connect } from 'react-redux';
import AppComponent from '../components/common/app';
const mapStateToProps = (state) => {
    return {
        userEntity: state.userReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
export default AppContainer;