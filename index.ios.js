/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

import Question from './src/components/Question'

export default class questionapp extends Component {

  navigatorRenderScene(route, navigator){
  navigator = navigator
  switch(route.id){
    case 'Question':
    return(
      <Question
        navigator={navigator}
        titile="How many yards are in a football field?"
        mdd="October 16"
        passProps={route.passProps}
      />
    )
  }
}

render() {
  return (
    <Navigator
      initialRoute={{
        id: 'Question'
      }}
      renderScene={this.navigatorRenderScene}
    />
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14769f',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('questionapp', () => questionapp);
