import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, images, SIZES } from "../constants";
import {
  RecommendBook,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import useFetchById from "../hook/useFetchById";

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");

  const {data} = useFetchById('user',{})

  const handlePress = () => {
    router.push('profile')
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn handlePress={handlePress} iconUrl={data.image != null ? data.image : 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'} dimension='100%' />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />

          <Popularjobs />
          <RecommendBook />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
