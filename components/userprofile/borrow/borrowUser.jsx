import { View, Text } from "react-native";
import useFetchById from "../../../hook/useFetchById";
import styles from "./borrowUser.style";
import AnimatedLottieView from "lottie-react-native";
import BorrowCard from "../../common/cards/borrowCard/borrowCard";

const BorrowUser = () => {

    const {data, isLoading, error} = useFetchById('borrow',{
        size: 50,
    })
    return(
        <View style={styles.container}>
        <View style={styles.cardsContainer}>
            <Text style={styles.text}>My Borrowing</Text>
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
                        <BorrowCard
                        data={item}
                        />
                    ))
                )
            }
        </View>
      </View>
    )
}

export default BorrowUser