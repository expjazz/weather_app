import city from '../components/farenCelsius';
import context from './context';
import updateTempToDom from '../components/searchResultDom';

const celsiusToFaren = async (e) => {
  if (e.target.id === 'metric') {
    city.farenCelsius.celsius = true;
  } else if (e.target.id === 'imperial') {
    city.farenCelsius.celsius = false;
  }
  const currentTemperature = await context.searchWeatherCity(city.farenCelsius.currentCity);
  const { main, name, weather } = currentTemperature;
  updateTempToDom.searchCityDom(name, main.temp, main.feels_like, main.temp_min, main.temp_max, weather[0].main, weather[0].description);
};

export default { celsiusToFaren };
