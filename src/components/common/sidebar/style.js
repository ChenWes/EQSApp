import { Platform, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const logoTop = ((deviceHeight / 4.5) / 2 - (deviceWidth > deviceHeight ? deviceWidth / 11.2 : deviceHeight / 11.2)) / 2;
const logoLeft = ((deviceWidth / 4.5) / 2 - (deviceWidth > deviceHeight ? deviceWidth / 8 : deviceHeight / 8)) / 2;

const logoWidth = deviceWidth > deviceHeight ? deviceWidth / 8 : deviceHeight / 8;
const logoHeight = deviceWidth > deviceHeight ? deviceWidth / 11.2 : deviceHeight / 11.2;

export default {
  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 4.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  drawerImage: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
    top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,

    width: logoWidth,
    height: logoHeight,
    resizeMode: "cover"
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  }
};
