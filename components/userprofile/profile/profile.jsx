import { View, Text, Image } from "react-native";
import useFetchById from "../../../hook/useFetchById";
import styles from "./profile.style";

const UserProfile = () => {
    const {data} = useFetchById('user',{})

    return (
        <View style={styles.container}>
            <Image
            source={data.image != null ? {uri:data.image} : 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'}
            resizeMode="contain"
            style={styles.image}
            />
            <View>
            <Text style={styles.text}>{data.firstName} {data.lastName}</Text>
            <Text style={styles.email}>{data.email}</Text>
            <Text style={styles.phone}>{data.phone}</Text>
            </View>
        </View>
    )
}

export default UserProfile