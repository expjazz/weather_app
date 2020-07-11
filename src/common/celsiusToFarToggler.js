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
  updateTempToDom.searchCityDom(name,
    main.temp, weather[0].main, weather[0].description,
    main.temp_max, main.temp_min, main.feels_like);
};

export default { celsiusToFaren };
