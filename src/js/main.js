/* eslint-disable */
import '../css/style.css';
import { getWeather } from './weather.js';

const defaultLocation = getWeather('Johannesburg');

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userLocation = document.querySelector('#location').value;
  getWeather(userLocation);
});
