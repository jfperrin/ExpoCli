import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Place from './Place';
import TabBarIcon from "./ui/TabBarIcon";
import Users from "./Users";
import Storage from "./Storage";

const StorageStack = createStackNavigator({
  Home: Storage,
});

StorageStack.navigationOptions = {
  tabBarLabel: 'Storage',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-appstore'
          : 'md-appstore'
      }
    />
  ),
};

const PlaceStack = createStackNavigator({
  Home: Place,
});

PlaceStack.navigationOptions = {
  tabBarLabel: 'Place',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const UsersStack =  createStackNavigator({
  Home: Users,
});

UsersStack.navigationOptions = {
  tabBarLabel: 'Users',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-contacts'
          : 'md-contacts'
      }
    />
  ),
};

export default createBottomTabNavigator({
  PlaceStack,
  UsersStack,
  StorageStack,
});
