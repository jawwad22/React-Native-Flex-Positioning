/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, {
        justifyContent: '', //is naw height sa center kiya 
        alignItems: 'center',//is naw vertical sa center kiya,
        flexDirection:'row'
      }]}>
        <View style={{ width: 100, height: 100, backgroundColor: 'purple' }}>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: 'purple' }}>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: 'yellow' }}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',


  },
});
