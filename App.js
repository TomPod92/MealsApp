// @refresh reset
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

// import MealsNavigator from './navigation/MealsNavigator.js';
import MealsFavTabNavigator from './navigation/MealsNavigator.js';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const App = () => {
  const [ fontLoaded, setFontLoaded ] = useState(false);

  if(!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }

  return (
    <NavigationContainer>
      <MealsFavTabNavigator>
        
      </MealsFavTabNavigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;