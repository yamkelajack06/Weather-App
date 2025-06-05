/* eslint-disable */
import displayCurrentWeather from "./displayWeather";
import { displayTodayWeather } from "./displayWeather";

const fakeWeatherArray = [
  { time: '06:00', icon: './icons/icons8-cloud-48.png', temperature: 45 },
  { time: '09:00', icon: './icons/icons8-cloud-48.png', temperature: 50 },
  { time: '12:00', icon: './icons/icons8-cloud-48.png', temperature: 55 },
  { time: '15:00', icon: './icons/icons8-cloud-48.png', temperature: 53 },
  { time: '18:00', icon: './icons/icons8-cloud-48.png', temperature: 48 },
  { time: '21:00', icon: './icons/icons8-cloud-48.png', temperature: 44 },
];


function fahrenheitToCelsius(f) {
  const c = (f - 32) * 5 / 9;
  return `${c.toFixed(1)}°C`;
}

const processJSON = (json) => {
  return {
    location: json.resolvedAddress,
    description: json.description,
    date: json.days[0].datetime,
    temperature: fahrenheitToCelsius(json.days[0].temp),
    feelsLikeTemp: fahrenheitToCelsius(json.days[0].feelslike),
    chancesOfRain: `Chance of rain: ${json.days[0].precipprob}%`,
  };
};

const getWeather = async (location) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=V8L54L4S835LAYDHDW57YBLBS&contentType=json`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch weather data for ${location}`);
    }

    const data = await response.json();

    if (!data.address) {
      console.log('Location not found');
      return;
    }

    const weatherValues = processJSON(data);
    console.log(weatherValues);
    displayCurrentWeather(weatherValues);
    displayTodayWeather(fakeWeatherArray);

  } catch (error) {
    console.error(error);
  }
};

export { getWeather };
