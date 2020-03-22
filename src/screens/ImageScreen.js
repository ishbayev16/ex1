import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/imageDetail';

const ImageScreen = () => {
    return(
        <View>
            <ImageDetail title="first title" 
                imageSource={require('../../assets/beach.jpg')}
                score={5}/>
            <ImageDetail title="second" 
                imageSource={require('../../assets/forest.jpg')}
                score={12}/> 
            <ImageDetail title="third" 
                imageSource={require('../../assets/mountain.jpg')}
                score={11}/>
            <ImageDetail title="forth"
                score={14}/>

        </View>    
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen; 