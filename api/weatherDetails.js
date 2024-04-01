import axios from "axios";
import { FORECAST_API_URL } from "../utils/apiConfig";

const weatherDetails = async (cityName) => {
  try {
    const response = await axios.get(FORECAST_API_URL, {
      params: {
        q: cityName,
        days: 5,
      },
    });
    // console.log("NASILYA ==>", response.data.forecast.forecastday[0]);
    return response.data.forecast.forecastday.map((day) => ({
      date: day.date,
      chance_of_rain: day.day.daily_chance_of_rain,
      temperature: day.day,
    }));
  } catch (error) {
    console.error("Error fetching weather forecast data:", error);
    return null;
  }
};

export default weatherDetails;
