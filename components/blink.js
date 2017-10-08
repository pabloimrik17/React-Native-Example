import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Componet {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    setInterval(() => {
      this.setState(previousState => ({ showText: !previousState.showText }));
    }, 1000);
  }

  render() {
    const display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}
