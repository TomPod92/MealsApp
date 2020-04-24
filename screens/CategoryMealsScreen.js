import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data.js';
import MealItem from '../components/MealItem.js';

const MealsScreen = ({ navigation, route }) => {
    const categoryId = route.params.categoryId;
    
    // ustaw TITLE strony
    const title = CATEGORIES.find(current => current.id === categoryId).title;
    navigation.setOptions({ title: title });

    // znajdz wszystkie meals z tej kategorii
    const meals = MEALS.filter(current => current.categoryIds.indexOf(categoryId) >= 0);

    const renderMealItem = (itemData) => {
        return <MealItem meal={itemData.item} onSelect={() => {}}/>
    }

    return (
        <View style={styles.screen}>
            <FlatList style={{width: '100%', paddingHorizontal: 10}} data={meals} renderItem={renderMealItem}/>
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