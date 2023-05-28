import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";

const Footer = ({onPress}) => {
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={onPress}
      >
        <Text style={styles.applyBtnText}>Borrow Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
