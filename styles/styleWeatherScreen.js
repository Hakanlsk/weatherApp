import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  viewContainer: {
    alignItems: "center",
    paddingVertical: hp("2%"),
  },
  activitiesAdviceButton: {
    borderWidth: 1,
    borderColor: "#8FB2F5",
    paddingHorizontal: hp("1%"),
    paddingVertical: hp("0.5%"),
    borderRadius: 12,
    marginVertical: 10,
    marginHorizontal: wp("3%"),
  },
  activitiesAdviceText: {
    color: "white",
    fontSize: hp("2%"),
    fontWeight: "700",
    alignItems: "center",
    textAlign: "center",
  },
  weatherDetailsContainer: {
    borderRadius: 12,
    width: wp("90%"),
    height: hp("40%"),
    justifyContent: "space-between",
    padding: hp("1%"),
    backgroundColor: "#16161F",
    marginVertical: 5,
  },
});

export default styles;
