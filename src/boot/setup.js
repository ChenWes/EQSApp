import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';

import AppContainer from '../containers/app';
import getTheme from '../theme/components';
import variables from '../theme/variables/commonColor';

//store
import store from '../store';

export default class Setup extends Component {
    render() {
        return (
            /**Provider and StyleProvider */
            <Provider store={store}>
                <StyleProvider style={getTheme(variables)}>
                    <AppContainer />
                </StyleProvider>
            </Provider>
        )
    }
}