import { Text, View } from "react-native";
import React from "react";
import style from "../styles/styleWeatherDetailBox";
import weatherDataCategorys from "../utils/appConstants";

const WeatherDetailBox = ({ apiData, probabilityOfRain }) => {
  return (
    <>
      {weatherDataCategorys?.map((item, index) => (
        <View key={index} style={style.weatherDetailsBox}>
          <View style={style.weatherDetailsTextContainer}>
            {item.icon}
            <Text style={style.weatherDetailsText}>{item.label}</Text>
          </View>
          <Text style={style.weatherDetailsTextRight}>
            {apiData
              ? item.label === "Thermal sensation"
                ? Math.round(apiData.current.temp_c) + "ºc"
                : item.label === "Probability of rain"
                ? probabilityOfRain + "%"
                : item.label === "Wind speed"
                ? Math.round(apiData.current.wind_kph) + " km/h"
                : item.label === "Air humidity"
                ? apiData.current.humidity + "%"
                : "UV Index"
                ? apiData.current.uv
                : ""
              : ""}
          </Text>
        </View>
      ))}
    </>
  );
};

export default WeatherDetailBox;
