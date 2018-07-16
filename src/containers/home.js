import { connect } from 'react-redux';
import HomeComponent from '../components/common/home';
const mapStateToProps = (state) => {
    return {
        userEntity: state.userReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;