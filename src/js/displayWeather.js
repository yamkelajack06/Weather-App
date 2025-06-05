/* eslint-disable */
import cloudIcon from '../icons/icons8-partly-cloudy-day-48.png';

const displayCurrentWeather = (weatherDetails) => {
  const temperature = weatherDetails.temperature;
  const location = weatherDetails.location;
  const chancesOfRain = weatherDetails.chancesOfRain;

  const weatherContent = `
    <h1>${location}</h1>
    <p>${chancesOfRain}</p>
    <h1 id="temp">${temperature}</h1>
  `;

  const weather = document.querySelector('.weather');
  clearDiv(weather);
  weather.innerHTML = weatherContent;

  const iconDiv = document.querySelector('.icon');
  clearDiv(iconDiv);
  const img = document.createElement("img");
  img.src = cloudIcon;
  img.alt = "weather-icon";
  iconDiv.appendChild(img);
};

const clearDiv = (element) => {
  if (element.tagName.toLowerCase() === 'img') {
    element.remove();
  } else {
    element.innerHTML = "";
  }
};

const displayTodayWeather = (weatherDetails) => {
  for (let i = 1; i <= 6; i++) {
    const card = document.querySelector(`.weather-cards.${i}`);
    if (card) {
      const data = weatherDetails[i - 1];
      card.querySelector('h5:first-of-type').textContent = data.time;
      const img = card.querySelector('img');
      img.src = './icons/icons8-cloud-48.png';
      img.alt = 'weather icon';
      const tempH5 = card.querySelectorAll('h5')[1];
      tempH5.textContent = data.temperature;
    }
  }
};

export default displayCurrentWeather;
export {displayTodayWeather};
