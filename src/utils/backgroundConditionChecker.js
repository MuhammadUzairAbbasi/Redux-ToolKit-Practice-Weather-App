import weather from "../assets/weather.jpg";
import clouds from "../assets/clouds.jpg";
import rain from "../assets/rain.jpg";
import snow from "../assets/snow.jpg";
import thunderstorm from "../assets/thunderstorm.jpg";
import fog from "../assets/fog.jpg";

export const getBackgroundByCondition = (condition) => {
  switch (condition) {
    case "Clear":
      return weather;
    case "Clouds":
      return clouds;
    case "Rain":
      return rain;
    case "Snow":
      return snow;
    case "Thunderstorm":
      return thunderstorm;
    case "Fog":
      return fog;
    default:
      return weather;
  }
};
