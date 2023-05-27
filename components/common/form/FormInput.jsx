import { TextInput } from "react-native";
import styles from './Form.style';

const FormInput = ({
    value, onChangeValue, placeholder = "", keyboard = "default", type
}) => {

    return(
        <TextInput
        style={styles.input}
        onChangeText={onChangeValue}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboard}
        />
    )
}

export default FormInput;