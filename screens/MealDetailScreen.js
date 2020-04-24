import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { MEALS } from '../data/dummy-data.js';
import HeaderButton from '../components/HeaderButton.js';

const MealDetailScreen = ({ navigation, route }) => {

    // ustaw TITLE strony
    const mealId = route.params.mealId;
    const meal = MEALS.find(current => current.id === mealId);
    navigation.setOptions({ 
        title: meal.title,
        headerRight: () => <HeaderButton handleClick={handleClick} iconName="ios-star"/>
    });

    const handleClick = () => {
        console.log('dzilaa')
    }

    return (
        <View style={styles.screen}>
            <Text>Meal Detail Screen</Text>
            <Button title="Go back to Categories" onPress={() => navigation.popToTop()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'red',
        marginRight: 50
    }
});
 
export default MealDetailScreen;