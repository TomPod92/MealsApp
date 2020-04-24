import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile.js';
import HeaderButton from '../components/HeaderButton.js';

const CategoriesScreen = ({navigation, route}) => {

    navigation.setOptions({
        headerLeft: () => <HeaderButton style={styles.hamburger} iconName="ios-menu" handleClick={() => navigation.toggleDrawer()} size={30} />
    })

    const renderGridItem = itemData => {
        return <CategoryGridTile title={itemData.item.title} onSelect={() => navigation.navigate("CategoryMeals", { categoryId:itemData.item.id } )} color={itemData.item.color}/>;
    }

    return (
        <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem}/>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        height: 80,
        margin: 10
    },
    hamburger: {
        marginLeft: 15
    }
});
 
export default CategoriesScreen;