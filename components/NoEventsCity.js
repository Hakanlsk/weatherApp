import { Text, View, ActivityIndicator, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const NoEventsCity = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginVertical: hp("25%"),
        width: wp("100%"),
      }}
    >
      {isLoading && <ActivityIndicator size="large" color="red" />}
      {!isLoading && (
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "red" }}>
          No events were found for the city you selected
        </Text>
      )}
    </View>
  );
};

export default NoEventsCity;
