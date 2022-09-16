import React from 'react'
import {styles} from './styles.js'
import { View } from 'react-native'
 
const Card = ({children, style}) => {
    return (
        <View style={{...styles.container,...style}}>
            {children}
        </View>
    )
}

export default Card