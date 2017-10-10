import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from "./components/bananas";
import LotsOfGreetings from "./components/greetings";
import Blink from "./components/blink";

export default class HelloWorldApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Blink text='Holi'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
