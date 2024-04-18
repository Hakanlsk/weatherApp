import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";

import background from "../assets/background.jpg";
import cityEvents from "../api/cityEvents";

import { AntDesign } from "@expo/vector-icons";
import styles from "../styles/styleCityEventsScreen";
import FailedLoadingData from "../components/FailedLoadingData";
import NoEventsCity from "../components/NoEventsCity";
import GoBackButton from "../components/GoBackButton";

const CityEventsScreen = () => {
  const { params } = useRoute();
  const { city } = params;

  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      const events = await cityEvents(city);
      if (events) {
        setEventsData(events);
      } else {
        console.log("No events found.");
      }
    };

    getEvents();
  }, [city]);

  const [dropdownStates, setDropdownStates] = useState({});

  const handleDropDown = (eventId) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [eventId]: !prevState[eventId],
    }));
  };

  const groupedEvents = eventsData?.reduce((acc, event) => {
    if (!acc[event.category]) {
      acc[event.category] = [];
    }
    acc[event.category].push(event);
    return acc;
  }, {});

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.actitvitiesBoxContainer}>
          {eventsData && eventsData.length > 0 ? (
            <ScrollView style={styles.actitvitiesBox}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={styles.cityTitle}>{city} Events</Text>
                <View style={styles.goBackButtonEventScreen}>
                  <GoBackButton />
                </View>
              </View>
              {Object.keys(groupedEvents).map((category) => (
                <View key={category}>
                  <Text style={styles.categoryTitle}>{category}</Text>
                  <View style={styles.eventInfoView}>
                    <Text style={styles.eventInfoText}>Event Name</Text>
                    <Text style={styles.eventInfoText}>Date</Text>
                    <Text style={styles.eventInfoText}></Text>
                  </View>
                  {groupedEvents[category].map((event) => (
                    <View key={event.id} style={styles.eventContainer}>
                      <View style={styles.eventDetails}>
                        <Text style={styles.eventText}>
                          {event.title.length > 0
                            ? `${event?.title.slice(0, 15)}...`
                            : event?.title}
                        </Text>
                        <Text style={styles.eventText}>
                          {event.title.length > 0
                            ? `${event?.start.slice(0, 16)}`
                            : event?.start}
                        </Text>
                        <TouchableOpacity
                          onPress={() => handleDropDown(event.id)}
                        >
                          {dropdownStates[event.id] ? (
                            <AntDesign name="arrowup" size={22} color="white" />
                          ) : (
                            <AntDesign
                              name="arrowdown"
                              size={22}
                              color="white"
                            />
                          )}
                        </TouchableOpacity>
                      </View>
                      {dropdownStates[event.id] && (
                        <View style={styles.descriptionView}>
                          <Text style={styles.eventText}>
                            {event?.description}
                          </Text>
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              ))}
            </ScrollView>
          ) : eventsData && eventsData.length === 0 ? (
            <NoEventsCity />
          ) : (
            <FailedLoadingData />
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CityEventsScreen;
