import { Dimensions, Platform } from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  /**logo */
  logoContainer: {
    flex: 2,
    // marginTop: deviceHeight / 8,
    // marginBottom: 30
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: deviceWidth > deviceHeight ? (deviceWidth / 2) / 2 : (deviceHeight / 2) / 2,
    height: deviceWidth > deviceHeight ? (deviceWidth / 2) / 2.8 : (deviceHeight / 2) / 2.8
  },


  /**form */
  loginFormView: {
    flex: 1,
    flexDirection: 'row',
  },
  loginFormSpaceView: {
    flex: 1,
  },
  loginForm: {
    flex: 2
  },

  /**button */
  loginButtonRowView: {
    flex: 1,
    flexDirection: 'row',
  },
  loginButtonView: {
    flex: 2,
  },
  loginButtonSpaceView: {
    flex: 1,
  },

  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    backgroundColor: "#A9233E",
    alignSelf: "center",
  },
  text: {
    // color: "#A9233E",
    bottom: 6,
    marginTop: 5
  }
};
