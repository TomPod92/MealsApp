import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, TouchableNativeFeedback, ImageBackground } from 'react-native';

import DefaultText from '../components/DefaultText';

const MealItem = (props) => {

    let TouchableComponent = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.mealItem}>
            <TouchableComponent onPress={props.onSelect}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.meal.imageUrl}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <DefaultText style={styles.title}>{props.meal.title}</DefaultText>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <DefaultText>{props.meal.duration}min</DefaultText>
                        <DefaultText>{props.meal.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.meal.affordability.toUpperCase()}</DefaultText>
                    </View>
                    
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
      height: 200,
      width: '100%',
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      overflow: 'hidden',
      marginVertical: 10
    },
    bgImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
    },
    mealRow: {
      flexDirection: 'row'
    },
    mealHeader: {
      height: '85%'
    },
    mealDetail: {
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '15%'
    },
    titleContainer: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      paddingVertical: 5,
      paddingHorizontal: 12
    },
    title: {
      fontFamily: 'open-sans-bold',
      fontSize: 20,
      color: 'white',
      textAlign: 'center'
    }
  });
 
export default MealItem;