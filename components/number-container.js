import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { colors } from '../constants/colors'

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:colors.primary,
        padding:5,
        borderRadius:10,
        marginVertical:5,
        alignItems:'center',
        justifyContent:"center"
    },
    number:{
        marginVertical:5,
        fontSize:25,
        fontWeight:"bold",
    }
})

const NumberContainer = ({children}) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    )
}

export default NumberContainer