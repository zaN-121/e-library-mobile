import { View, Text } from "react-native";
import useFetchById from "../../../hook/useFetchById";
import styles from "./borrowUser.style";
import AnimatedLottieView from "lottie-react-native";

const BorrowUser = () => {

    const {data, isLoading, error} = useFetchById('borrow',{
        size: 50,
    })
    return(
        <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.header}>Borrowing Date</Text>
          <Text style={styles.header}>Return Date</Text>
          <Text style={styles.header}>Status</Text>
          <Text style={styles.header}>Late Charge</Text>
        </View>
        <View>
            {
                isLoading ? (
                <AnimatedLottieView
                    autoPlay={true}
                    style={{width: 100, height: 100}}
                    source={require('../../../assets/images/97018-window10-style-login-loader.json')}
                />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    data?.map((item)=> (
                        <View style={styles.row}>
                            <Text>{item.borrowingDate}</Text>
                            <Text>{item.returnDate}</Text>
                            <Text>{item.borrowState}</Text>
                            <Text>{item.lateCharge}</Text>
                        </View>
                    ))
                )
            }
        </View>
      </View>
    )
}

export default BorrowUser