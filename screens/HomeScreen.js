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
  KeyboardAvoidingView,
} from "react-native";
import { checkIfLocationEnabled, getCurrentLocation } from "../utils/Location";
import cityNames from "../api/cityNames";

import { useNavigation } from "@react-navigation/native";
import appIcon from "../assets/cevtorPng.png";

import background from "../assets/background.jpg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "../styles/styleHomeScreen";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [cityName, setCityName] = useState(null);
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLocationServicesEnabled(await checkIfLocationEnabled());
      const city = await getCurrentLocation();
      setCityName(city);
    };

    fetchData();
  }, []);

  const handleAcceptLocation = () => {
    if (cityName) {
      setSearchText(cityName);
      filterCities(cityName);
    }
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
            <Text
              style={{ fontSize: hp("4%"), color: "#FAFAFA", marginLeft: 10 }}
            >
              iWeather
            </Text>
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
            ) : (
              <Text style={styles.accepLocationText}>
                location not found, check location settings
              </Text>
            )}

            <Text style={styles.subtitle1}>
              Welcome to <Text style={styles.typeWeather}>TypeWeather</Text>{" "}
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
                    onPress={() => navigation.navigate("result", { city })}
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
                <Text style={{ color: "red" }}>
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
