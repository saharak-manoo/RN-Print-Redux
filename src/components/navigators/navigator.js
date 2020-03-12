import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import I18n from '../../helpers/i18n';
import AsyncStorage from '@react-native-community/async-storage';
import {Badge} from 'react-native-elements';

// View
import LogoView from '../logo/logoView';
import HomeView from '../home/homeView';

const MainStack = createStackNavigator(
  {
    Home: {screen: HomeView},
  },
  {
    headerMode: 'none',
  },
);

const MainNavigator = createMaterialBottomTabNavigator(
  {
    Main: {
      screen: MainStack,
    },
  },
  {
    initialRouteName: 'Main',
    activeColor: '#2370E6',
    inactiveColor: '#202020',
    barStyle: {backgroundColor: '#202020'},
    labeled: false,
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Logo: LogoView,
    App: MainStack,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Logo',
  },
);

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
