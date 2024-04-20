import { Text, View, ActivityIndicator, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import GoBackButton from "./GoBackButton";
import styles from "../styles/styleCityEventsScreen";

const NoEventsCity = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <View style={styles.noEventView}>
      {isLoading && <ActivityIndicator size="large" color="red" />}
      {!isLoading && (
        <>
          <Text style={styles.noEventText}>
            No events were found for the city you selected
          </Text>
          <GoBackButton />
        </>
      )}
    </View>
  );
};

export default NoEventsCity;
