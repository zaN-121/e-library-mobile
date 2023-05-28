import { Registration} from "../components"
import { SafeAreaView, ScrollView, View } from "react-native";
import { COLORS, SIZES } from "../constants";
import { Stack} from "expo-router";


const Regist = () => {
      
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => ""
          }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              padding: SIZES.medium,
            }}
          >
            <Registration/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default Regist