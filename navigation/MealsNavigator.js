import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen.js';
import CategoryMealsScreen from '../screens/CategoryMealsScreen.js';
import MealDetailScreen from '../screens/MealDetailScreen.js';
import FavoritesScreen from '../screens/FavoritesScreen.js';

import colors from '../constants/colors.js';

const Stack = createStackNavigator();

const stackNavigatorOptions = {
    headerStyle: {
        backgroundColor: colors.primaryColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

const MealsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={stackNavigatorOptions}
        >
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
    )
};
// ----------------------------------------------------------------------------------
const Tabs = createBottomTabNavigator();

const tabNavigatorOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Meals') {
            iconName = 'ios-restaurant'
        } else if (route.name === 'Favorites') {
            iconName = 'ios-star';
        }

        return <Ionicons name={iconName} size={26} color={color} />
    },
})

const MealsFavTabNavigator = () => {
    return (
        <Tabs.Navigator
            screenOptions={tabNavigatorOptions}
            tabBarOptions={{
                activeTintColor: colors.accentColor,
                inactiveTintColor: 'gray',
                // activeBackgroundColor: 'red'
            }}
            showLabel={false}
            showIcon={false}
        >
            <Tabs.Screen name="Meals" component={MealsNavigator}/>
            <Tabs.Screen name="Favorites" component={FavoritesScreen}/>
        </Tabs.Navigator>
    )
}

// export default MealsNavigator;
export default MealsFavTabNavigator;