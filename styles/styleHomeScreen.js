import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    flex: 1,
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },
  icon: {
    width: 37,
    height: 24,
  },
  homeContainer: {
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("10%"),
  },
  inputContainerKeyboardOpen: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("4%"),
  },
  subtitle1: {
    fontSize: 20,
    color: "#FAFAFA",
    marginBottom: 10,
  },
  typeWeather: {
    color: "#8FB2F5",
  },
  accepLocationButton: {
    borderWidth: 1,
    borderColor: "#4b4b73",
    padding: 10,
    marginVertical: 15,
    borderRadius: 12,
  },
  accepLocationText: {
    fontSize: 14,
    color: "white",
    fontWeight: "700",
  },
  subtitle2: {
    fontSize: 14,
    color: "#BFBFD4",
  },
  input: {
    marginTop: 30,
    backgroundColor: "#1E1E29",
    width: wp("80%"),
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: "#FAFAFA",
    fontSize: 16,
  },
  resultBox: {
    marginTop: 2,
    backgroundColor: "#3B3B54",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: wp("80%"),
    height: 45,
    borderRadius: 8,
    justifyContent: "center",
  },
  resultText: {
    color: "#FAFAFA",
    fontSize: 16,
  },
});

export default styles;
