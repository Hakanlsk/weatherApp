import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  WeatherScreen,
  GraphsScreen,
  CityEventsScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="result"
          options={{ headerShown: false }}
          component={WeatherScreen}
        />
        <Stack.Screen
          name="cityEvents"
          options={{ headerShown: false }}
          component={CityEventsScreen}
        />
        <Stack.Screen
          name="graphsScreen"
          options={{ headerShown: false }}
          component={GraphsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
