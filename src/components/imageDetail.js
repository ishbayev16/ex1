import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({title, imageSource, score}) => {
    return(
        <View>
        <Text> {title}</Text>
        <Image source={imageSource}/>
        <Text>{score}</Text>    
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ImageDetail; 