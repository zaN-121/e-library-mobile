import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES } from "../constants";
import { ScreenHeaderBtn } from "../components";
import BorrowUser from "../components/userprofile/borrow/borrowUser";
import UserProfile from "../components/userprofile/profile/profile";
import { removeToken } from "../utils/token";

const Profile = () => {
  const router = useRouter()
  const handlePress = () =>{
    removeToken()
    router.push('login')
  }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn handlePress={handlePress} iconUrl={'https://cdn.icon-icons.com/icons2/2518/PNG/512/logout_icon_151219.png'} dimension='100%' />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView>
        <View style={{
            flex: 1,
            padding: SIZES.medium,
          }}>
            <UserProfile/>
            <BorrowUser/>
        </View>
      </ScrollView>
      </SafeAreaView>
    )
}

export default Profile