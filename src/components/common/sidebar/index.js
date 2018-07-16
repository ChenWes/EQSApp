import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

const drawerCover = require('../../../assets/FCBM_02.jpg');
const drawerImage = require('../../../assets/launch_screen.png');

const datas = [
  {
    name: "Home",
    route: "Home",
    icon: "home",
    bg: "#A9233E"
  },
  {
    name: "Finally Order",
    route: "FinallyOrder",
    icon: "file",
    bg: "#A9233E",
    types: 10
  },
  {
    name: "Import Material Order",
    route: "ImportMaterialOrder",
    icon: "file",
    bg: "#A9233E",
  },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder1",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder2",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder3",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder4",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder5",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder6",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder7",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder8",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder9",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder10",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder11",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder12",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder13",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder14",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },{
  //   name: "Finally Order",
  //   route: "FinallyOrder15",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder16",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder17",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder18",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder19",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder20",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
  // {
  //   name: "Finally Order",
  //   route: "FinallyOrder21",
  //   icon: "search",
  //   bg: "#A9233E",
  //   types: 10
  // },
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#FFF", top: -1 }}
        >
          <Image style={styles.drawerCover} source={drawerCover} />
          {/*<Image square style={styles.drawerImage} source={drawerImage} />*/}
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                    type='FontAwesome'
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {
                  data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Item`}</Text>
                    </Badge>
                  </Right>
                }
              </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
