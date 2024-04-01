import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const weatherDetailStyle = StyleSheet.create({
  weatherDetailsBox: {
    borderBottomWidth: 2,
    borderColor: "#1C1C27",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("1.5%"),
  },
  weatherDetailsTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  weatherDetailsText: {
    color: "#BFBFD4",
    fontSize: 14,
    fontWeight: "700",
    alignItems: "center",
    marginLeft: 10,
  },
  weatherDetailsTextRight: {
    color: "#FAFAFA",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default weatherDetailStyle;
