import { StyleSheet } from "react-native";
import {colors} from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: colors.background,
        borderRadius: 5,
    }
})