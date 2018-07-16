import React, { Component } from "react";
import { ImageBackground, StyleSheet, Dimensions, View, Text, TextInput, Image, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import { Container, Header, Button, Left, Right, Body, Title, Form, Item, Icon, Label, Input, H2, H3, } from "native-base";

// import styles from "./styles";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


// const launchscreenBg = require('../../assets/launchscreen-bg.png');
const launchscreenLogo = require('../../assets/launch_screen.png');

export default class UserLoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userCode: '',
            password: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={launchscreenLogo} />
                </View>
                <View style={styles.loginForm}>
                    <ScrollView>
                        <View style={styles.TextInputView}>
                            <TextInput style={styles.TextInput}
                                keyboardType='default'
                                placeholder={'UserCode'}
                                returnKeyType='next'
                                value={this.state.userCode}
                                autoFocus={false}
                                maxLength={100}
                                onChangeText={
                                    (text) => {
                                        this.setState({ userCode: text });
                                    }
                                }
                            />
                        </View>
                        <View style={styles.TextInputView}>
                            <TextInput style={styles.TextInput}
                                keyboardType='default'
                                placeholder={'Password'}
                                returnKeyType='done'
                                value={this.state.password}
                                autoFocus={false}
                                maxLength={100}
                                secureTextEntry={true}
                                onChangeText={
                                    (text) => {
                                        this.setState({ password: text });
                                    }
                                }
                            />
                        </View>
                        <TouchableOpacity style={styles.loginButtonView}
                            onPress={() => {
                                this.props.navigation.navigate('Home');
                            }}
                        >
                            <Text style={styles.loginText} >
                                Login
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {

                        }}>
                            <Text style={styles.forgetPasswordText}>Forget the password?</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
        backgroundColor: '#CCC'
    },
    logo: {
        width: deviceWidth > deviceHeight ? deviceWidth / 4 : deviceHeight / 4,
        height: deviceWidth > deviceHeight ? deviceWidth / 5.6 : deviceHeight / 5.6
    },
    loginForm: {
        // padding: 30,
        flex: 3
    },
    TextInputView: {
        margin: 10,
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#CCC',
        justifyContent: 'center',
    },

    TextInput: {
        backgroundColor: '#ffffff',
        height: 45,
        margin: 18,
    },

    loginButtonView: {
        margin: 10,
        height: 50,
        backgroundColor: '#A9233E',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#A9233E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    forgetPasswordText: {
        color: "#A9233E",
        textAlign: 'center',
        marginTop: 25
    }
})