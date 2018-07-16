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
    ActionSheet
} from "native-base";

let BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
let DESTRUCTIVE_INDEX = 3;
let CANCEL_INDEX = 4;

export default class FinallyCheckComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: ''
        }
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
                        <Button transparent onPress={() => alert('search')}>
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
                    <Text>Header with transparent prop</Text>
                </Content>
            </Container >
        );
    }
}
