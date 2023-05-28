import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, images, SIZES } from "../constants";
import { ScreenHeaderBtn } from "../components";
import BorrowUser from "../components/userprofile/borrow/borrowUser";

const Profile = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView>
        <View style={{
            flex: 1,
            padding: SIZES.medium,
          }}>
            <BorrowUser/>
        </View>
      </ScrollView>
      </SafeAreaView>
    )
}

export default Profile