import {React, useState} from "react";
import { View, Text, StyleSheet, TextInput, Button} from 'react-native'
import {colors} from '../constants/colors'
import  Card  from '../components/card/index'
import Input from "../components/input";



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
        width:320,
        maxWidth:'75%',
        minHeight:150,
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
    }

});






const StartGameScreen = () => {

    const [inputValue,setInputValue] = useState('')

    const LimpiarHandler = () => {

    }
    
    const ConfirmHandler = () => {
    
    }

    const onHandleChangeText = (text) => {
        setInputValue(text.replace(/[^0-9]/g, ''))
    }

    return (
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
                <Button title="Limpiar" onPress={LimpiarHandler} color={colors.primary}/>
                <Button title="Confirmar" onPress={ConfirmHandler} color={colors.primary}/>
                </View>
            </Card>
            
       </View> 
    )
}

export default StartGameScreen