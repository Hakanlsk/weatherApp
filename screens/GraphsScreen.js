import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useRoute } from "@react-navigation/native";
import background from "../assets/background.jpg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "../styles/styleGraphScreen";
import FailedLoadingData from "../components/FailedLoadingData";

const GraphsScreen = () => {
  const { params } = useRoute();
  const { otherDaysData, city } = params;

  const labels = otherDaysData?.map((item) => {
    const date = new Date(item.date);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  });

  const maxTempData = otherDaysData
    ? {
        labels,
        datasets: [
          {
            data: otherDaysData.map((item) => item.temperature.maxtemp_c),
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            strokeWidth: 2,
          },
        ],
      }
    : {};

  const uvIndexData = otherDaysData
    ? {
        labels,
        datasets: [
          {
            data: otherDaysData.map((item) => item.temperature.uv),
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            strokeWidth: 2,
          },
        ],
      }
    : {}; // Create an empty object if otherDaysData is null

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    backgroundGradientOpacity: 0.5,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        {otherDaysData ? (
          <View style={styles.lineChartView}>
            <Text style={styles.graphTitle}>{city} City - Max Temperature</Text>
            <LineChart
              data={maxTempData}
              width={wp("100%")}
              height={hp("35%")}
              chartConfig={chartConfig}
              bezier
            />
            <Text style={styles.graphTitle}>{city} City - UV Index Change</Text>
            <LineChart
              data={uvIndexData}
              width={wp("100%")}
              height={hp("35%")}
              chartConfig={chartConfig}
              bezier
            />
          </View>
        ) : (
          <FailedLoadingData />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default GraphsScreen;
