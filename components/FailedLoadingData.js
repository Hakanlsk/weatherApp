import { Text, View, ActivityIndicator, Alert } from "react-native";
import React, { useState, useEffect } from "react";

const FailedLoadingData = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <View style={{ alignItems: "center", marginVertical: 20 }}>
      {isLoading && <ActivityIndicator size="large" color="red" />}
      {!isLoading && (
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "red" }}>
          Failed to get data from API, server is under maintenance, please try
          again later
        </Text>
      )}
    </View>
  );
};

export default FailedLoadingData;
