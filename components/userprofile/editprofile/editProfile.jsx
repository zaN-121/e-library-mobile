import { View, Text } from "react-native";
import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import useFetchById from "../../../hook/useFetchById";

const EditProfile = () => {

    const {data} = useFetchById(`user`,{})

    return(
        <View>
            
        </View>
    )
}

export default EditProfile