import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#131319",
    paddingVertical: 10,
  },
  lineChartView: {
    flexDirection: "column",
    alignItems: "center",
  },
  graphTitle: {
    fontWeight: "700",
    color: "white",
    marginVertical: hp("2%"),
  },
});

export default styles;
