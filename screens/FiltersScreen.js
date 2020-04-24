import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import HeaderButton from '../components/HeaderButton.js';

const FiltersScreen = ({navigation, route}) => {

    navigation.setOptions({
        headerLeft: () => <HeaderButton style={styles.hamburger} iconName="ios-menu" handleClick={() => navigation.toggleDrawer()} size={30} />
    })

    return (
        <View style={styles.screen}>
            <Text>Filters Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hamburger: {
        marginLeft: 15
    }
});
 
export default FiltersScreen;