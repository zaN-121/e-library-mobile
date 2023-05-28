import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    image:{
        width: 150,
        height: 150,
        marginRight: 20,
        borderRadius: 50,
    },
    text:{
        textAlign: 'justify',
        fontSize: SIZES.xxLarge,
    },
    container:{
        flexDirection: 'row',
    },
    email:{
        fontSize: SIZES.medium,
    },
    phone:{
        fontSize: SIZES.small + 2,
    }
})

export default styles