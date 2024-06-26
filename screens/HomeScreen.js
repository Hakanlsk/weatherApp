import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { checkIfLocationEnabled, getCurrentLocation } from "../utils/Location";
import cityNames from "../api/cityNames";
import { useNavigation } from "@react-navigation/native";
import appIcon from "../assets/cevtorPng.png";
import background from "../assets/background.jpg";
import styles from "../styles/styleHomeScreen";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [cityName, setCityName] = useState(null);
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [searchText, setSearchText] = useState(null);
  const [filteredCities, setFilteredCities] = useState([]);
  const [errorMessageShow, setErrorMessageShow] = useState(false);

  const handleAcceptLocation = () => {
    setSearchText(cityName);
    filterCities(cityName);
  };

  const filterCities = async (text) => {
    if (text === "") {
      setFilteredCities([]);
      return;
    }
    const response = await cityNames(text, 3);
    if (response) {
      const uniqueCities = [];
      response.forEach((cityData) => {
        if (!uniqueCities.includes(cityData.name)) {
          uniqueCities.push(cityData.name);
        }
      });
      setFilteredCities(uniqueCities);
    } else {
      setFilteredCities([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLocationServicesEnabled(await checkIfLocationEnabled());
      const LocationCity = await getCurrentLocation();
      setCityName(LocationCity);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!cityName) {
      setErrorMessageShow(true);
      const timeout = setTimeout(() => {
        setErrorMessageShow(false);
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [cityName]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.homeContainer}>
          <View style={styles.titleView}>
            <Image style={styles.icon} source={appIcon} />
            <Text style={styles.titleText}>iWeather</Text>
          </View>

          <View
            style={[
              filteredCities.length > 0
                ? styles.inputContainerKeyboardOpen
                : styles.inputContainer,
            ]}
          >
            {cityName ? (
              <TouchableOpacity style={styles.accepLocationButton}>
                <Text
                  style={styles.accepLocationText}
                  onPress={handleAcceptLocation}
                >
                  Click to accept {cityName} as your location
                </Text>
              </TouchableOpacity>
            ) :  (
              errorMessageShow && (
                <Text style={styles.errorText}>
                  location not found, check location settings
                </Text>
              )
            )}

            <Text style={styles.subtitle1}>
              Welcome to <Text style={styles.typeWeather}>TypeWeather</Text>
            </Text>
            <Text style={styles.subtitle2}>
              Choose a location to see the weather forecast
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Search Location"
              placeholderTextColor={"#7F7F98"}
              onChangeText={(text) => {
                setSearchText(text);
                filterCities(text);
              }}
              value={searchText}
            ></TextInput>
            {filteredCities.length > 0 ? (
              <ScrollView>
                {filteredCities.map((city, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("result", { city });
                      setSearchText("");
                      setFilteredCities([]);
                    }}
                    key={index}
                    style={styles.resultBox}
                  >
                    <Text key={index} style={styles.resultText}>
                      {city}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            ) : (
              searchText && (
                <Text style={styles.errorText}>
                  please enter a valid city name
                </Text>
              )
            )}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
