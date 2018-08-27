import React, { Component } from "react";
import { ImageBackground, Dimensions, StyleSheet, View, ScrollView, StatusBar } from "react-native";
import { Container, Button, Text, Toast } from "native-base";
import DeviceInfo from 'react-native-device-info';

// import styles from "./styles";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const launchscreenBg = require('../../../assets/launchscreen-bg.png');
const launchscreenLogo = require('../../../assets/launch_screen.png');

class HomeComponent extends Component {
  componentWillMount() {
    //check login or not
    if (!this.props.userEntity.isAuthenticated) {
      Toast.show({
        text: 'please login',
        buttonText: 'Ok',
        position: "top",
        type: "warning"
      });
      this.props.navigation.navigate('UserLogin');
    } else {
      // this.props.navigation.openDrawer();
    }
  }
  render() {
    let IsTablet = DeviceInfo.isTablet();

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {/*<ImageBackground source={launchscreenBg} style={styles.imageContainer}>*/}
        <View style={styles.logoContainer}>
          <ImageBackground source={launchscreenLogo} style={styles.logo} />
        </View>
        <View style={styles.textContainer}>
          <ScrollView>
            <Text style={styles.firstText}>EQS Mobile Application</Text>
            <Text style={styles.secondText}>Esquel Group IT</Text>
            <Text style={styles.versionText}>V{DeviceInfo.getVersion()}</Text>
            {
              !IsTablet &&
              <Text style={styles.mobileText}>当前的设备是手机，适配可能会出现一些问题，如有问题请与管理员联系</Text>
            }
            <Button style={styles.startButton}
              onPress={() => {
                this.props.navigation.openDrawer()
              }}
            >
              <Text>start</Text>
            </Button>
          </ScrollView>
        </View>
        {/*</ImageBackground>*/}
      </View>
    );
  }
}

export default HomeComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCC'
  },
  logo: {
    width: deviceWidth > deviceHeight ? deviceWidth / 4 : deviceHeight / 4,
    height: deviceWidth > deviceHeight ? deviceWidth / 5.6 : deviceHeight / 5.6
  },
  textContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  versionText: {
    color: "#A9233E",
    textAlign: 'center',
    marginTop: 10
  },
  firstText: {
    color: "#A9233E", margin: 10, fontSize: 25, alignSelf: "center"
  },
  secondText: {
    color: "#A9233E", margin: 10, fontSize: 18, alignSelf: "center"
  },
  mobileText: {
    color: "#000",
    margin: 10,
    fontSize: 12,
    alignSelf: "center"
  },
  startButton: {
    marginTop: deviceHeight / 12,
    backgroundColor: "#A9233E",
    alignSelf: "center",

    padding: 10
  }
})
