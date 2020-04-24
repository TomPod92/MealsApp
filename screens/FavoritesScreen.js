import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MealList from '../components/MealList.js';
import { MEALS } from '../data/dummy-data.js';

const FavoritesScreen = ({navigation, route}) => {
    const favMeals = MEALS.filter(current => current.id === 'm1' || current.id ==="m2");

    return ( <MealList listData={favMeals} navigation={navigation}/> );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 
export default FavoritesScreen;