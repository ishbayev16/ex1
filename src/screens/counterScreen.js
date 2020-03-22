import React,{useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import CounterColor from '../components/colorCounter';

const CounterScreen = ()=>{
    const [counter, setCounter] = useState(0);
    const [colors, setColors] = useState([]);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);


    console.log("daf",red, green, blue);


    return <View>
        <Text>Counter: {counter} </Text>

        <Button title="increase" onPress={()=>{ 
            setCounter(counter+1)

        }}/>
        <Button title="decrease" onPress={()=>{ 
            setCounter(counter-1);

        }}/>

        <View><Text>Change single square</Text></View>

        <CounterColor 
            onIncrease={()=>setRed(red+10)} 
            onDecrease ={()=> setRed(red -10)}
            text="red"/>
        <CounterColor 
            onIncrease={()=>setGreen(green+10)}  
            onDecrease ={()=> setGreen(green -10)}
            text="green"/>
        <CounterColor 
            onIncrease={()=>setBlue(blue+10)} 
            onDecrease ={()=> setBlue(blue -10)}
            text="blue"/>

            <View style={{height: 100, width:100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>
            
            </View>     

        <View style={{height:20}}></View>
        <Button title="add a color" onPress={()=>{
            setColors([...colors,randomRgb()])
        }}/>
        
        <FlatList
        keyExtractor = {(item) => item}
            data={colors}
            renderItem={({item})=>{
                return <View style={{height: 100, width:100, backgroundColor: item}}>
            
                </View>
            }}
         >

        </FlatList>

    </View>
};

const randomRgb = () =>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({})

export default CounterScreen;

