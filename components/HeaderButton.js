import React from 'react';
import { StyleSheet, View, Text, Dimensions,TouchableOpacity, Platform, TouchableNativeFeedback, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors.js';

const HeaderButton = (props) => {

    let TouchableComponent = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View {...props} style={styles.headerButton}>
            <TouchableComponent onPress={props.handleClick}>
                <Ionicons name="ios-star" size={24} color="white"/>
            </TouchableComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    headerButton: {
        marginRight: 10
    },
});

export default HeaderButton;