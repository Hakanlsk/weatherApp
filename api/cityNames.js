import axios from "axios";
import { API_KEY, SEARCH_API_URL } from "../utils/apiConfig";

const cityNames = async (cityInput, limit) => {
  try {
    const response = await axios.get(SEARCH_API_URL, {
      params: {
        q: cityInput,
        limit: limit,
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

export default cityNames;
