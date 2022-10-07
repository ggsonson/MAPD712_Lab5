import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import getStyleSheet from './styles';                          //1  

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: 1                 //2                      
        };
        this.changeTheme = this.changeTheme.bind(this);           //3 
    }

    changeTheme(theme) {
        this.setState({ theme: this.state.theme = theme })          //4
    }

    render() {

        const styles = getStyleSheet(this.state.theme);          //5
        const backgroundColor =
            StyleSheet.flatten(styles.container).backgroundColor;  //6

        return ( //7-10
            <View style={styles.container} >
                <View style={styles.box} >
                    <View style={styles.groupOne}>
                        <Button title="dark"
                            onPress={() => this.changeTheme(1)} />
                        <Button title="light"
                            onPress={() => this.changeTheme(2)} />
                    </View>
                    <View style={styles.groupTwo}>
                        <Button title="red"
                            onPress={() => this.changeTheme(3)} />
                        <Button title="blue"
                            onPress={() => this.changeTheme(4)} />
                    </View>
                </View>
            </View>
        );
    }
}