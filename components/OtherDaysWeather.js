import { Text, View, Image } from "react-native";
import React from "react";
import styles from "../styles/styleOtherDaysWeather";

const OtherDaysWeather = ({ forecastData }) => {
  return (
    <View style={styles.container}>
      {forecastData?.map((item, index) => (
        <View key={index} style={styles.dayBox}>
          <Text style={styles.dateText}>
            {new Date(item.date).toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </Text>
          <Image
            style={styles.conditionIcon}
            source={{
              uri: `http://${forecastData[index]?.temperature?.condition.icon}`,
            }}
          />
          <Text style={styles.maxTempText}>
            {Math.round(item.temperature.maxtemp_c)}ºc
          </Text>
          <Text style={styles.minTempText}>
            {Math.round(item.temperature.mintemp_c)}ºc
          </Text>
        </View>
      ))}
    </View>
  );
};

export default OtherDaysWeather;
