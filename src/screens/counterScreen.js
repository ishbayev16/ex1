import React,{useState, useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import CounterColor from '../components/colorCounter';

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    //state = {red: , blue: , green: ,}
    //action = {colorToChange: 'red' || 'green' || 'blue, amout: number}   
    //action = {type: 'change_red' || 'change_green' || 'change_blue, payload: number}

    switch(action.type){   
        case 'change_red':
            if(state.red + action.payload > 255 || state.red + action.payload < 0){
                return state;
            }
            return {...state, red : state.red + action.payload};
        case 'change_green':
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state : {...state, green : state.green + action.payload};
        case 'change_blue':
            return {...state, blue : state.blue + action.payload};
        case 'increase_counter':
            return {...state, counter: state.counter + action.payload};
        case 'decrease_counter':
            return {...state, counter: state.counter - action.payload}; 
        default:
            return state;
    }
};


const CounterScreen = ()=>{
    // const [counter, setCounter] = useState(0);
    const [colors, setColors] = useState([]);

    

    const [state, dispatch] = useReducer(reducer, {red: 0, green:0, blue:0, counter: 0});
    const {red, green, blue, counter} = state;




    return <View>
        {/* <Text>Counter: {counter} </Text> */}
        <Text>Counter: {counter} </Text>

        <Button title="increase" onPress={()=>{ 
            // setCounter(counter+1)
            dispatch({type: 'increase_counter', payload: 1});

        }}/>
        <Button title="decrease" onPress={()=>{ 
            // setCounter(counter-1);
            dispatch({type: 'decrease_counter', payload: 1});

        }}/>

        <View><Text>Change single square</Text></View>

        <CounterColor 
            onIncrease={()=> dispatch({type: 'change_red', payload: COLOR_INCREMENT})} 
            onDecrease ={()=> dispatch({type:'change_red', payload:-1 * COLOR_INCREMENT})}
            text="red"/>
        <CounterColor 
            onIncrease={()=> dispatch({type: 'change_green', payload: COLOR_INCREMENT})}  
            onDecrease ={()=> dispatch({type: 'change_green', payload:-1 * COLOR_INCREMENT})}
            text="green"/>
        <CounterColor 
            onIncrease={()=> dispatch({type: 'change_blue', payload: COLOR_INCREMENT})} 
            onDecrease ={()=>  dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
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

