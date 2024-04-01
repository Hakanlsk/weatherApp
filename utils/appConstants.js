import {
  FontAwesome5,
  Ionicons,
  SimpleLineIcons,
  Octicons,
} from "@expo/vector-icons";

const weatherDataCategorys = [
  {
    icon: (
      <FontAwesome5
        style={{ marginLeft: 5, marginRight: 4 }}
        name="thermometer-half"
        size={24}
        color="#3B3B54"
      />
    ),
    label: "Thermal sensation",
  },
  {
    icon: <Ionicons name="rainy-outline" size={24} color="#3B3B54" />,
    label: "Probability of rain",
  },
  {
    icon: <FontAwesome5 name="wind" size={24} color="#3B3B54" />,
    label: "Wind speed",
  },
  {
    icon: <SimpleLineIcons name="drop" size={24} color="#3B3B54" />,
    label: "Air humidity",
  },
  {
    icon: <Octicons name="sun" size={24} color="#3B3B54" />,
    label: "UV Index",
  },
];

export default weatherDataCategorys;
