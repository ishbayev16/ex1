import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScreenLayout = () => {
    return(<View style={styles.viewStyle}>        
                <Text style={styles.textStyle}> List Screen1</Text>  
                <Text style={styles.textStyle}> List Screen2</Text>
                <Text style={styles.textStyle}> List Screen3</Text>   
           </View> 


    
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'flex-start',
        
    },
    textStyle: {
        borderWidth:1,
        borderColor: 'red',
        margin: 10
    }

});

export default ScreenLayout; 