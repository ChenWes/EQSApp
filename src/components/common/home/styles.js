import { Dimensions, Platform } from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: deviceWidth > deviceHeight ? (deviceWidth / 2) / 2 : (deviceHeight / 2) / 2,
    height: deviceWidth > deviceHeight ? (deviceWidth / 2) / 2.8 : (deviceHeight / 2) / 2.8
  },
  text: {
    // bottom: 6,
    // marginTop: 5
  }
};
