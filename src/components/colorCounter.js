import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CounterColor = ({text, onIncrease, onDecrease}) => {
    return <View>
        <Text>{text}</Text>   
        <Button onPress={()=>onIncrease()} title={`Increase ${text}`}/>
        <Button onPress={()=>onDecrease()} title={`Decrease ${text}`}/>
    </View>
}

const styles = StyleSheet.create({});

export default CounterColor;

