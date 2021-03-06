/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Amplify from 'aws-amplify';
import PushNotification from '@aws-amplify/pushnotification';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
PushNotification.configure(aws_exports);

type Props = {};
export default class App extends Component<Props> {

    componentDidMount() {
        PushNotification.onNotification((notification) => {
            console.log('notification: ', notification);

            // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
            // notification.finish(PushNotificationIOS.FetchResult.NoData);
        });
      
        // gets the registration token
        PushNotification.onRegister((token) => {
            console.log('token: ', token);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
