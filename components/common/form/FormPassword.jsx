import React from "react";
import { Pressable, TextInput, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./Form.style";

const FormPassword = ({value, placeholder, onChangeValue}) => {
    const [hidePass, setHidePass] = React.useState(true)

    return(
        <View style={styles.password}>
            <TextInput
            secureTextEntry={hidePass}
            onChangeText={onChangeValue}
            value={value}
            placeholder={placeholder}
            style={{width: 200}}
            />
            <Pressable onPress={()=>setHidePass(!hidePass)}>
                <Entypo name={hidePass? "eye-with-line" : "eye"} size={24} color={'gray'}/>
            </Pressable>
        </View>
    )
}

export default FormPassword