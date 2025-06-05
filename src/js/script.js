/* eslint-disable */
const processJSON = (json) => {
  const weatherValues = {
    location: json.resolvedAddress,
    description: json.description,
    date: json.days[0].datetime,
    temperature: json.days[0].temp,
    feelsLikeTemp: json.days[0].feelslike,
  };
  return weatherValues;
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

    if (data.address === 'null') {
      console.log('Location not found');
    } else {
      console.log(processJSON(data));
    }
  } catch (error) {
    console.error(error);
  }
};

//This needs to find a place to reside
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userLocation = document.querySelector('#location').value;
  getWeather(userLocation);
});
