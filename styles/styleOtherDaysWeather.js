import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    width: wp("90%"),
    height: hp("8%"),
    justifyContent: "space-around",
    // backgroundColor: "#16161F",
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("7%"),
  },
  dayBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    fontWeight: "700",
    fontSize: 14,
    color: "#BFBFD4",
  },
  conditionIcon: {
    width: hp("5%"),
    height: hp("5%"),
  },
  maxTempText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FAFAFA",
  },
  minTempText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#7F7F98",
  },
});

export default styles;
