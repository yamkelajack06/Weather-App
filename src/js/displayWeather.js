/* eslint-disable */
const displayTodayWether = (weatherDetails) => {
    const temperature = weatherDetails.temperature;
    const location = weatherDetails.resolvedAddress;
    const chancesOfRain = null;

    const weatherContent = `
    <h1>${location}</h1>
    <p>${chancesOfRain}</p>
    <h1>${temperature}</h1>
    `
    const weatherContainer = document.querySelector('.curr-weather');
    const weather = document.createElement('div');
    weather.classList.add('weather');
    weatherContainer.appendChild(weatherContent);
};

export default disableWeather;