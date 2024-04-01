import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
  },
  actitvitiesBoxContainer: {
    width: "100%",
    alignItems: "center",
  },
  actitvitiesBox: {
    width: wp("100%"),
    padding: wp("3%"),
  },
  cityTitle: {
    fontSize: 24,
    color: "#8FB2F5",
    marginBottom: 25,
    textAlign: "center",
  },
  categoryTitle: {
    fontSize: 20,
    color: "#FAFAFA",
    textTransform: "uppercase",
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "600",
  },
  eventInfoView: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("5%"),
    marginBottom: 20,
  },
  eventInfoText: {
    color: "#FAFAFA",
    fontSize: 20,
  },
  eventContainer: {
    backgroundColor: "#3B3B54",
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
  },
  eventDetails: {
    flexDirection: "row",
  },
  eventText: {
    fontSize: 16,
    color: "#BFBFD4",
    flex: 1,
  },
  descriptionView: {
    flexDirection: "row",
    marginTop: 20,
  },
});

export default styles;
