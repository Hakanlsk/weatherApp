import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import getWeatherData from "../api/wetherDataApi";
import weatherDetails from "../api/weatherDetails";

import WeatherDetailBox from "../components/WeatherDetailBox";
import WeatherOverview from "../components/WeatherOverview";
import OtherDaysWeather from "../components/OtherDaysWeather";

import background from "../assets/background.jpg";

import styles from "../styles/styleWeatherScreen";
import FailedLoadingData from "../components/FailedLoadingData";

const WeatherScreen = () => {
  const navigation = useNavigation();

  const { params } = useRoute();
  const { city } = params;

  const [apiData, setApiData] = useState(null);
  const [forecastData, setForecastData] = useState("");

  const generalWeatherData = async () => {
    try {
      const data = await getWeatherData(city);
      setApiData(data);
    } catch (error) {
      console.error("Hava durumu verileri alınamadı: ", error);
    }
  };

  const weatherDetailsData = async () => {
    try {
      const weatherForecast = await weatherDetails(city);
      setForecastData(weatherForecast);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    generalWeatherData();
    weatherDetailsData();
  }, [city]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.viewContainer}>
          {forecastData || apiData ? (
            <WeatherOverview forecastData={forecastData} apiData={apiData} />
          ) : (
            <FailedLoadingData />
          )}

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("cityEvents", { city })}
              style={styles.activitiesAdviceButton}
            >
              <Text
                style={styles.activitiesAdviceText}
              >{`${city} Events`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("graphsScreen", { forecastData, city })
              }
              style={styles.activitiesAdviceButton}
            >
              <Text style={styles.activitiesAdviceText}>Graphs</Text>
            </TouchableOpacity>
          </View>
          {apiData || forecastData ? (
            <View style={styles.weatherDetailsContainer}>
              <WeatherDetailBox forecastData={forecastData} apiData={apiData} />
            </View>
          ) : (
            <FailedLoadingData />
          )}
          {forecastData ? (
            <OtherDaysWeather forecastData={forecastData} />
          ) : (
            <FailedLoadingData />
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WeatherScreen;
