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
    Body
} from "native-base";


export default class ImportMaterialCheckComponent extends Component {
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
                        <Title>Import Material Check Search</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => alert('search')}>
                            <Icon name="search" />
                        </Button>
                        <Button transparent>
                            <Icon name="more" />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Text>Header with transparent prop</Text>
                </Content>
            </Container>
        );
    }
}
