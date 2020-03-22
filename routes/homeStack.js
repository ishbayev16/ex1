import { createStackNavigator } from 'react-navigation-stack';
import Home from '../src/screens/home';
import ReviewDetails from '../src/screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';
import ImageScreen from '../src/screens/ImageScreen';
import CounterScreen from '../src/screens/counterScreen';

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
  ImageScreen: {
    screen: ImageScreen,
    navigationOptions:{
      title: 'Image Screen',
    }
  },

  CounterScreen: {
    screen: CounterScreen,
    navigationOptions:{
      title: 'Counter Screen',
    }
  }


};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;