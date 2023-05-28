import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./borrowCard.style";


const BorrowCard = ({data}) => {

    return(
        <View style={styles.state(data.borrowState.toLowerCase())}>
            <Text style={styles.borrowName} numberOfLines={1}>
            {data.borrowState.toLowerCase()}
            </Text>
            <View style={styles.textContainer}>
            <Text style={styles.borrowType} numberOfLines={2}>
                ID : {data.borrowId}
            </Text>    
            <Text style={styles.borrowType} numberOfLines={1}>
                Borrow Date : {data.borrowingDate}
            </Text>
            <Text style={styles.borrowType} numberOfLines={1}>
                Return Date : {data.returnDate}
            </Text>
            <Text style={styles.borrowType} numberOfLines={1}>
                Late Charge : Rp.{data.lateCharge}
            </Text>
            </View>
        </View>
    )

}

const styling = StyleSheet.create({

})

export default BorrowCard