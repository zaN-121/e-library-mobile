import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS, FONT } from "../../../../constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
        
      },
      logoContainer: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      },
      logImage: {
        width: "70%",
        height: "70%",
      },
      textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 10,
        marginRight: -1,
      },
      borrowName: {
        fontSize: SIZES.medium,
        fontFamily: "DMBold",
      },
      borrowType: {
        fontSize: SIZES.small + 2,
        fontFamily: "DMRegular",
        color: COLORS.gray,
        marginTop: 3,
        textTransform: "capitalize",
        fontFamily: FONT.regular,
      },
      state: (name) => {
        return {
            // backgroundColor : name == "canbetake" ? "gray" : name == "taken" ? "blue" : name == "late" ? "red"  : name == "return" ? "green" : "pink",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            padding: SIZES.medium,
            borderRadius: SIZES.small,
            ...SHADOWS.medium,
            shadowColor: COLORS.white,
            borderColor: name == "canbetake" ? "orange" : name == "taken" ? "blue" : name == "late" ? "red"  : name == "return" ? "green" : "pink",
            borderWidth: 2,
        }
      }
});

export default styles;