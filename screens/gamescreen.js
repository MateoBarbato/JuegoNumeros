import React, { useEffect, useRef, useState } from "react";
import {View,Text,StyleSheet, Button, ScrollView} from 'react-native'
import Card from "../components/card";
import NumberContainer from "../components/number-container";

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        alignItems:'center'
    },
    card:{
        minHeight:200,
        marginTop:20,
        marginHorizontal:20,
        width:'80%',
        alignItems:"center",
        justifyContent:"center",

    },
    title:{

    },
    buttonContainer:{
        width:'70%',
        marginHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
    },
    containerscroll:{
        flex:1
    }
})


const generateRandonNumberBetween = (min,max,exclude) => {
    min=Math.ceil(min)
    max=Math.ceil(max)
    const randomNumber = Math.floor(Math.random() * (max -min) + min)
    if(randomNumber === exclude){
        return generateRandonNumberBetween(min,max,exclude)
    } else {
        return randomNumber
    }
}

const GameScreen = ({selectedNumber, onGameOver}) => {
    const [currentGuess,SetCurrentGuess] = useState(generateRandonNumberBetween(1,100,selectedNumber))
    const [rounds,setRounds] = useState(0)
    const currentLow = useRef(1);
    const currentHigh = useRef(100)

    useEffect(() => {
        if(currentGuess === selectedNumber) {
            onGameOver(rounds)
        }
    },[currentGuess,selectedNumber,onGameOver] )


    return (
        <ScrollView style={styles.containerscroll}>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Text style={styles.title}>La suposicion del oponente</Text>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <Button style={styles.buttonContainer} title="Menor" onPress={null}/>
                        <Button style={styles.buttonContainer} title="Mayor" onPress={null}/>
                    </View>

                </Card>
            </View>
        </ScrollView>

    )


}


export default GameScreen