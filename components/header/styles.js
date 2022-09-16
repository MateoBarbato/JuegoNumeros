import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors'

 export const styles = StyleSheet.create({
    header: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingTop: 20,
    },
    title: {
        fontSize: 20,
        color: colors.white,
        // fontFamily: 'Lato-Bold'
    }
});