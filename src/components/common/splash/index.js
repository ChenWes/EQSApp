import React, { Component } from "react";
import { ImageBackground, StyleSheet, Text, Dimensions, View, StatusBar } from "react-native";
import DeviceInfo from 'react-native-device-info';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const launchscreenLogo = require('../../../assets/launch_screen.png');

class SplashComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //go to home page 3 sec
        setTimeout(function () {
            this.props.navigation.navigate('Drawer')
        }.bind(this), 3000);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <ImageBackground source={launchscreenLogo} style={styles.logo} />
                    <Text style={styles.versionText}>V1.0.0</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width: deviceWidth > deviceHeight ? deviceWidth / 4 : deviceHeight / 4,
        height: deviceWidth > deviceHeight ? deviceWidth / 5.6 : deviceHeight / 5.6
    },
    versionText: {
        color: "#A9233E",
        textAlign: 'center',
        marginTop: 30
    }
})

export default SplashComponent;
