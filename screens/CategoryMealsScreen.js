import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data.js';

const MealsScreen = ({ navigation, route }) => {
    
    const title = CATEGORIES.find(current => current.id === route.params.categoryId).title;
    navigation.setOptions({ title: title });

    return (
        <View style={styles.screen}>
            <Text>Meals Screen</Text>
            <Button title="Go to meal Detail" onPress={() => navigation.navigate("MealDetail")}/>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 
export default MealsScreen;