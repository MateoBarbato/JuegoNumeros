import React from 'react'
import { View, StyleSheet } from 'react-native';
import Header from './components/header/index'
import StartGameScreen from './screens/startGame';


const containerstyle = StyleSheet.create({
  container:{
    flex:1,
    backGroundColor:'#fff'
  }
})

export default function App() {
  return (
    <View style={containerstyle.container}>
      <Header title={'Adivina el numero'}/>
      <StartGameScreen/>
    </View>
  );
}

