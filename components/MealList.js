import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import MealItem from './MealItem.js';

const MealList = (props) => {

    const renderMealItem = (itemData) => {
        return <MealItem meal={itemData.item} onSelect={() => props.navigation.navigate("MealDetail", {mealId: itemData.item.id})}/>
    }

    return (
        <View style={styles.list}>
            <FlatList style={{width: '100%', paddingHorizontal: 10}} data={props.listData} renderItem={renderMealItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 
export default MealList;