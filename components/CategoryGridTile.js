import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

import DefaultText from '../components/DefaultText.js';

const CategoryGridTile = (props) => {

    let TouchableComponent = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableComponent style={{flex: 1}} onPress={props.onSelect}>
                <View style={{...styles.container,...{backgroundColor: props.color}}}>
                    <DefaultText style={styles.title} numberOfLines={2}>{props.title}</DefaultText>
                </View>
            </TouchableComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 150,
        margin: 10,
    },
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'flex-end',
        padding: 15,
        borderRadius: 10,
        shadowColor: 'red',
        shadowOpacity: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        elevation: 15
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right'
    }
})
 
export default CategoryGridTile;