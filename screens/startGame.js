import {React, useState} from "react";
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native'
import {colors} from '../constants/colors'
import  Card  from '../components/card/index'
import Input from "../components/input";
import NumberContainer from "../components/number-container";



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginVertical:10  
    },
    title:{
        fontSize:20,
        color:colors.text,
        textAlign:'center',
        paddingVertical:20
    },
    label:{
        fontSize:15,
        color:colors.text,
        textAlign:'center',
        paddingVertical:5
    },
    inputContainer:{
        width:'75%',
        minHeight:200,
        borderRadius:5,
        flex:1,
        flexGrow:0.30,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:15,
        backgroundColor:colors.background,
    },
    input:{
        maxWidth:140,
        borderBottomColor:colors.primary,
        borderBottomWidth:1.5,
        minWidth:90,
        fontSize:25,
        paddingVertical:10,
        textAlign:'center',
    },
    buttonContainer:{
        width:'70%',
        marginHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
    },
    summaryContainer:{
        width:'75%',
        height:180,
        marginHorizontal:20,
        alignItems:"center",
        paddingVertical:10,
        marginTop:20,
    },
    summaryText:{
        marginVertical:5,
        fontSize:18,

    },
    containerScroll:{
        flex:1
    }
    

});






const StartGameScreen = ({onStartGame}) => {

    const [inputValue,setInputValue] = useState('')
    const [confirmed,setConfirmed] = useState(false)
    const [selectedNumber,setSelectedNumber]= useState(0)
    

    const onHandleChangeText = (text) => {
        setInputValue(text.replace(/[^0-9]/g, ''))
    }

    const onReset = () => {
        setInputValue('');
        setConfirmed(false)
        setSelectedNumber(0)
        Keyboard.dismiss
    }
    const onConfirmed = () => {
        const chosenNumber = parseInt(inputValue,10)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >99) return;
            setConfirmed(true)
            setSelectedNumber(chosenNumber)
            setInputValue('')
    }

    const onHandleStartGame= () => {
        onStartGame(selectedNumber);
    }

    const ConfirmedOutput = ()=> confirmed && (
        <Card style={styles.summaryContainer}>
            <Text style={styles.summaryText}>Tu seleccion </Text>
            <NumberContainer> {selectedNumber} </NumberContainer>
            <Button title="Iniciar Juego"
                    onPress={()=>onHandleStartGame()}
                    color={colors.primary}
            />
        </Card>
    )

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={styles.containerScroll}>
                <View style={styles.container}>
                    <Text style={styles.title}>Comenzar Juego!</Text>
                    <Card style={styles.inputContainer}>
                        <Text style={styles.label}>Elija un numero</Text>
                        <Input style={styles.input} 
                            keyboardType={'numeric'} 
                            maxLength={2}
                            blurOnSubmit
                            autoCapitalize='none'
                            autoCorrect={false}
                            value={inputValue}
                            onChangeText={(text)=>{onHandleChangeText(text)}}
                        />
                        <View style={styles.buttonContainer}>
                        <Button title="Limpiar" onPress={onReset} color={colors.primary}/>
                        <Button title="Confirmar" onPress={onConfirmed} color={colors.primary}/>
                        </View>
                    </Card>
                    <ConfirmedOutput/>
                </View>
            </ScrollView>
       </TouchableWithoutFeedback>
    )
}

export default StartGameScreen