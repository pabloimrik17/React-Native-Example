import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);

        this.state = {showText: true};

        setInterval(() => {
            this.setState(previusState => {
                return { showText: !previusState.showText };
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';

        return (
            <Text>{display}</Text>
        );
    }
}