import axios from "axios";
import { EVENT_API_TOKEN, EVENT_API_URL } from "../utils/apiConfig";

const cityEvents = async (cityName) => {
  try {
    const response = await axios.get(EVENT_API_URL, {
      headers: {
        Authorization: `Bearer ${EVENT_API_TOKEN}`,
        Accept: "application/json",
      },
      params: {
        q: cityName,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching events:", error);
    return null;
  }
};

export default cityEvents;
