import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";

import infobox from "../assets/infobox.png";
import rainBackground from "../assets/rain-background.jpg";
import sunnyBackground from "../assets/sunny-background.jpg";

import styles from "../styles/styleWeatherOverview";
import FailedLoadingData from "./FailedLoadingData";

const WeatherOverview = ({ apiData, forecastData }) => {
  const conditionIcon = forecastData[0]?.temperature?.condition.icon;
  const probabilityOfRain = forecastData[0]?.chance_of_rain;

  let backgroundImage;
  if (probabilityOfRain < 40 && apiData?.current?.temp_c > 15) {
    backgroundImage = sunnyBackground;
  } else if (probabilityOfRain >= 40) {
    backgroundImage = rainBackground;
  } else {
    backgroundImage = infobox;
  }

  const getFormattedDate = () => {
    const today = new Date();
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return today.toLocaleDateString("en-US", options);
  };
  const formattedDate = getFormattedDate();

  return (
    <>
      <View style={styles.infoBox}>
        <ImageBackground
          source={backgroundImage}
          style={styles.infoBoxImage}
          resizeMode="cover"
        >
          {apiData && forecastData ? (
            <>
              <View style={styles.infoBoxHeader}>
                <Text style={styles.cityNameText}>
                  {apiData?.location?.name}, {apiData?.location?.country}
                </Text>
                <Text style={styles.dateText}>{formattedDate}</Text>
              </View>

              <View style={styles.infoBoxFooter}>
                <View style={styles.infoBoxFooterLeft}>
                  <Text style={styles.tempText}>
                    {Math.round(apiData.current.temp_c)}ºc
                  </Text>
                  <Text style={styles.minMaxTempText}>
                    {Math.round(forecastData[0]?.temperature?.mintemp_c)}ºc /{" "}
                    {Math.round(forecastData[0]?.temperature?.maxtemp_c)}ºc
                  </Text>
                  <Text style={styles.conditionText}>
                    {apiData?.current?.condition?.text}
                  </Text>
                </View>
                <View>
                  <Image
                    style={styles.conditionIcon}
                    source={{
                      uri: `http://${conditionIcon}`,
                    }}
                  />
                </View>
              </View>
            </>
          ) : (
            <FailedLoadingData />
          )}
        </ImageBackground>
      </View>
    </>
  );
};

export default WeatherOverview;
