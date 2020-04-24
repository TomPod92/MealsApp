import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data.js';
import MealList from '../components/MealList.js';

const MealsScreen = ({ navigation, route }) => {
    const categoryId = route.params.categoryId;
    
    // ustaw TITLE strony
    const title = CATEGORIES.find(current => current.id === categoryId).title;
    navigation.setOptions({ title: title });

    // znajdz wszystkie meals z tej kategorii
    const meals = MEALS.filter(current => current.categoryIds.indexOf(categoryId) >= 0);


    return ( <MealList listData={meals} navigation={navigation} /> );
}

 
export default MealsScreen;