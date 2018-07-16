import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Text,
    Left,
    Right,
    Body,
    ActionSheet,

    Item,
    Label,
    Input,

    Card,
    CardItem,
    ListItem,
    Separator,

    Form,
    Picker,
    DatePicker,
} from "native-base";

import { View } from 'react-native';

let BUTTONS = ["高级查询", "Option 1", "Option 2", "Delete", "Cancel"];
let DESTRUCTIVE_INDEX = 3;
let CANCEL_INDEX = 4;

export default class FinallyOrderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: '',
            selected: '',
            chosenDate: new Date()
        }

        this.setDate = this.setDate.bind(this);
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    render() {
        return (
            <Container style={{ backgroundColor: "transparent" }}>
                <Header
                    androidStatusBarColor="#A9233E"
                    iosBarStyle="light-content">
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Finally Check Search</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => alert('ss')}>
                            <Icon name="search" />
                        </Button>
                        <Button transparent onPress={() => {
                            ActionSheet.show(
                                {
                                    title: "Testing ActionSheet",
                                    options: BUTTONS,
                                    cancelButtonIndex: CANCEL_INDEX,
                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                },
                                buttonIndex => {
                                    this.setState({ clicked: BUTTONS[buttonIndex] });
                                }
                            )
                        }}>
                            <Icon name="more" />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Text>Order Search</Text>
                    <Form>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Item picker style={{ flex: 1 }}>
                                <Label>Order Number</Label>
                                <Input />
                            </Item>
                            <Item picker style={{ flex: 1 }}>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Item picker style={{ flex: 1 }}>
                                <Label>Factory</Label>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    style={{ width: undefined }}
                                    selectedValue={this.state.selected}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="GEG" value="key0" />
                                    <Picker.Item label="EAP" value="key1" />
                                    <Picker.Item label="GET" value="key2" />
                                    <Picker.Item label="GEK" value="key3" />
                                    <Picker.Item label="ESP" value="key4" />
                                </Picker>
                            </Item>
                            <Item picker style={{ flex: 1 }}>
                                <Label>Order Date</Label>
                                <DatePicker
                                    defaultDate={new Date(2018, 4, 4)}
                                    minimumDate={new Date(2018, 1, 1)}
                                    maximumDate={new Date(2018, 12, 31)}
                                    locale={"en"}
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType={"fade"}
                                    androidMode={"default"}
                                    placeHolderText="Select date"
                                    textStyle={{ color: "green" }}
                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                    onDateChange={this.setDate} />
                            </Item>
                        </View>
                    </Form>
                    <Separator bordered>
                        <Text>MIDFIELD</Text>
                    </Separator>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Lee Allen</Text>
                    </ListItem>

                    <Separator bordered>
                        <Text>MIDFIELD</Text>
                    </Separator>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="wifi" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Wi-Fi</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                </Content>
            </Container >
        );
    }
}
