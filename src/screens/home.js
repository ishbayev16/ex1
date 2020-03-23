import React,{useState} from 'react';
import { TextInput,StyleSheet, View, Text,Button, FlatList, TouchableOpacity, Systrace } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function Home({navigation}) {
    const pressHandler = () => {
        navigation.navigate('ImageScreen');
    }

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

    const [name, setName] = useState('');

  return (
    <View style={globalStyles.container}>
        {/* <Text style={globalStyles.titleText}>Home Screen</Text>

        <Button title="go to review dets" onPress={pressHandler}/> */}

        <Button
                    title="go to Image screen"
                    onPress={()=>(navigation.navigate('ImageScreen'))}
                    // onPress={pressHandler}
                />

        <Button
                    title="go to Counter screen"
                    onPress={()=>(navigation.navigate('CounterScreen'))}
                    // onPress={pressHandler}
                />
         <Button
                    title="go to ScreenLayout screen"
                    onPress={()=>(navigation.navigate('ScreenLayout'))}
                    // onPress={pressHandler}
                />



        <FlatList 
            data={reviews}
            renderItem={({item})=>(


                <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                    <Text>{item.title}</Text>
                </TouchableOpacity> 
            )}
        />
        <Text>{name}</Text>
        <TextInput 
            style={styles.textInput}
            autoCapitalize='none'
            autoCorrect={false}
            value={name}
            onChangeText={(val)=>setName(val)} 
        />

    

    </View>
  );
}

const styles = StyleSheet.create({
    textInput:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,        
    }
})