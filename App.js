import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import Header from './components/header/index'
import StartGameScreen from './screens/startGame';
import GameScreen from './screens/gamescreen';


const containerstyle = StyleSheet.create({
  container:{
    flex:1,
    backGroundColor:'#fff'
  }
})

export default function App() {
  const [userNumber,setUserNumber] = useState()

  const onStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  const title = !userNumber ? 'Adivina el numero' : 'Comienza el juego'

  let content = <StartGameScreen onStartGame={onStartGame}/>

  if(userNumber) {
    content = <GameScreen selectedNumber={userNumber}/>
  }


  return (
    <View style={containerstyle.container}>
      <Header title={title }/>
      {content}
    </View>
  );
}

