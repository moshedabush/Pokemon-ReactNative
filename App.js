import React, { Component } from 'react';
import { StatusBar, Dimensions, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import User from './Components/User';
import Pokemons from './Components/Pokemons';
import Details from './Components/Details';
import Favorite from './Components/Favorite';
import UserProfile from './Components/UserProfile';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Pokemons"
      tabBarPosition="bottom"
      screenOptions={{
        indicatorStyle: {
          backgroundColor: 'grey',
          marginBottom: 5,
          width: '25%',
          marginLeft: '10%',
        },
        activeTintColor: 'white',
        inactiveTintColor: '#D6D6D6',
      }}>
      <Tab.Screen name="Pokemons" component={Pokemons} />
      <Tab.Screen name="Favorite" component={Favorite} tabBarLable={2}/>
    </Tab.Navigator>
  );
};

class App extends Component {
  render() {
    return (
      <>
        <StatusBar hidden />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Pokemon" headerShown="false">
            <Stack.Screen name="Pokemon" component={User} />
            <Stack.Screen name="User Profile" component={UserProfile} />
            <Stack.Screen name="Pokemon World" component={TabNavigator} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
