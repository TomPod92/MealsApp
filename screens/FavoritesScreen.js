import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MealList from '../components/MealList.js';
import HeaderButton from '../components/HeaderButton.js';

import { MEALS } from '../data/dummy-data.js';

const FavoritesScreen = ({navigation, route}) => {

    navigation.setOptions({
        headerLeft: () => <HeaderButton style={styles.hamburger} iconName="ios-menu" handleClick={() => navigation.toggleDrawer()} size={30} />
    })

    const favMeals = MEALS.filter(current => current.id === 'm1' || current.id ==="m2");

    return ( <MealList listData={favMeals} navigation={navigation}/> );
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
 
export default FavoritesScreen;