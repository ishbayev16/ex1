import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function ReviewDetails({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>

        <Text>{navigation.getParam("title")}</Text>
    </View>
  );
}