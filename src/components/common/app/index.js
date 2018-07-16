import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import SplashContainer from '../../../containers/splash';
import HomeContainer from '../../../containers/home';

import UserLoginContainer from '../../../containers/userLogin';
import FinallyOrderContainer from '../../../containers/finallyOrder';
import ImportMaterialOrderContainer from '../../../containers/importMaterialOrder';

import SideBar from '../sidebar';

//left menu
const Drawer = DrawerNavigator(
    {        
        Home: { screen: HomeContainer },

        FinallyOrder: { screen: FinallyOrderContainer },
        ImportMaterialOrder: { screen: ImportMaterialOrderContainer },
    },
    {
        initialRouteName: "Home",
        contentOptions: {
            activeTintColor: "#A9233E"
        },
        // drawerWidth: 320,
        drawerPosition: 'left',
        contentComponent: props => <SideBar {...props} />
    }
);

//all app
const AppNavigator = StackNavigator(
    {
        Splash: { screen: SplashContainer },
        Drawer: { screen: Drawer },


        UserLogin: { screen: UserLoginContainer },
    },
    {
        initialRouteName: "Splash",
        headerMode: "none"
    }
);

const App = () =>
    <Root>
        <AppNavigator />
    </Root>;

export default App;
