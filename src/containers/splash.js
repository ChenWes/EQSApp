import { connect } from 'react-redux';
import SplashComponent from '../components/common/splash';
const mapStateToProps = (state) => {
    return {        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const SplashContainer = connect(mapStateToProps, mapDispatchToProps)(SplashComponent);
export default SplashContainer;