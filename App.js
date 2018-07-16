/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Setup from './src/boot/setup';

import storage from './src/utils/eqsStorage';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Setup />
    );
  }
}