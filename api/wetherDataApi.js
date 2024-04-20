import axios from "axios";
import { CURRENT_API_URL } from "../utils/apiConfig";

const getWeatherData = async (cityName) => {
  try {
    const response = await axios.get(CURRENT_API_URL, {
      params: {
        q: cityName,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

export default getWeatherData;
