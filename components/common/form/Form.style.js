import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 330,
        marginHorizontal: 16,
        marginTop: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'brown',
        padding: 12,
        backgroundColor: 'rgb(234,235,240',
        alignItems: 'center',
    },
    password: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "brown",
        padding: 12,
        margin: 16,
        backgroundColor: 'rgb(234,235,240)',
    },
    button: {
        alignItems: "center",
        backgroundColor: 'sienna',
        padding: 16,
        borderRadius: 25,
        alignSelf: 'stretch',
        margin: 16
    },
    buttonText: {
        color: 'bisque',
    }
})

export default styles;