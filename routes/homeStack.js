import { createStackNavigator } from 'react-navigation-stack';
import Home from '../src/screens/home';
import ReviewDetails from '../src/screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='GameZone' navigation={navigation} />
      }
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;