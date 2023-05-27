import { TouchableOpacity, Text } from "react-native";
import styles from "./Form.style";

const FormButton = ({label, onClick}) => {
    return(
        <TouchableOpacity style={styles.button} onPress={onClick}>
            <Text style={styles.buttonText}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default FormButton