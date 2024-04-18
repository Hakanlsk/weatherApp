import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  infoBox: {
    borderRadius: 12,
    width: wp("90%"),
    height: hp("27%"),
    backgroundColor: "#13131A",
    flexDirection: "column",
  },
  infoBoxImage: {
    flex: 1,
    borderRadius: 12,
    overflow: "visible",
    resizeMode: "stretch",
    borderWidth: 0,
  },
  infoBoxHeader: {
    paddingTop: hp("2%"),
    paddingHorizontal: wp("4%"),
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  infoBoxFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: hp("4%"),
    paddingHorizontal: wp("4%"),
    flex: 1,
  },
  infoBoxFooterLeft: {
    alignItems: "flex-start",
  },
  cityNameText: {
    fontSize: hp("2.5%"),
    fontWeight: "700",
    color: "#FAFAFA",
  },
  dateText: {
    fontWeight: "400",
    fontSize: hp("1.8%"),
    color: "#FAFAFA",
  },
  tempText: {
    fontWeight: "800",
    fontSize: hp("7%"),
    color: "#FFFFFF",
  },
  minMaxTempText: {
    fontSize: hp("2.5%"),
    fontWeight: "700",
    color: "#FFFFFF",
  },
  conditionText: {
    fontSize: hp("2%"),
    fontWeight: "400",
    color: "#FFFFFF",
  },
  conditionIcon: {
    width: hp("15%"),
    height: hp("15%"),
  },
});

export default styles;
