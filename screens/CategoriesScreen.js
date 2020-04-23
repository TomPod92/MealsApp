import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({navigation, route}) => {

    const renderGridItem = itemData => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate("CategoryMeals", { categoryId:itemData.item.id } )}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
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

    }
});
 
export default CategoriesScreen;