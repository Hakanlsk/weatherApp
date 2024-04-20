import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <AntDesign name="left" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#3B3B54",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
  },
});
