import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const MealDetailScreen = ({ navigation, route }) => {
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
    }
});
 
export default MealDetailScreen;