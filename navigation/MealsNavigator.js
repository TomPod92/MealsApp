import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen.js';
import CategoryMealsScreen from '../screens/CategoryMealsScreen.js';
import MealDetailScreen from '../screens/MealDetailScreen.js';
import FavoritesScreen from '../screens/FavoritesScreen.js';

import colors from '../constants/colors.js';

const MealsStack = createStackNavigator();

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
        <MealsStack.Navigator screenOptions={stackNavigatorOptions} >
            <MealsStack.Screen name="Categories" component={CategoriesScreen} />
            <MealsStack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
            <MealsStack.Screen name="MealDetail" component={MealDetailScreen} />
        </MealsStack.Navigator>
    )
};
// ----------------------------------------------------------------------------------
const FavoritesStack = createStackNavigator();
const FavoritesNavigator = () => {
    return (
        <FavoritesStack.Navigator screenOptions={stackNavigatorOptions}>
            <FavoritesStack.Screen name="Favorites" component={FavoritesScreen}/>
            <FavoritesStack.Screen name="MealDetail" component={MealDetailScreen}/>
        </FavoritesStack.Navigator>
    )
}
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
                activeTintColor: 'white',
                inactiveTintColor: 'white',
                activeBackgroundColor: colors.accentColor,
                inactiveBackgroundColor: colors.primaryColor
                // tabStyle: {backgroundColor: colors.primaryColor},
            }}
            
        >
            {/* <Tabs.Screen name="Meals" component={MealsNavigator} options={ ({route}) => ({ title: 'elo' }) }/> */}
            <Tabs.Screen name="Meals" component={MealsNavigator}/>
            <Tabs.Screen name="Favorites" component={FavoritesNavigator}/>
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    test: {
        backgroundColor: 'red'
    }
})

// export default MealsNavigator;
export default MealsFavTabNavigator;