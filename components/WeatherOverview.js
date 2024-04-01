import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import infobox from "../assets/infobox.png";
import styles from "../styles/styleWeatherOverview";

const WeatherOverview = ({ apiData, otherDaysData }) => {
  const conditionIcon = otherDaysData[0]?.temperature?.condition.icon;

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
          source={infobox}
          style={styles.infoBoxImage}
          resizeMode="cover"
        >
          {apiData && otherDaysData ? (
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
                    {Math.round(otherDaysData[0]?.temperature?.mintemp_c)}ºc /{" "}
                    {Math.round(otherDaysData[0]?.temperature?.maxtemp_c)}ºc
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
            <View>
              <Text>Yükleniyor</Text>
            </View>
          )}
        </ImageBackground>
      </View>
    </>
  );
};

export default WeatherOverview;
