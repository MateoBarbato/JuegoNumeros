import React from 'react'
import { View, StyleSheet } from 'react-native';
import Header from './components/header/index'

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
    </View>
  );
}

