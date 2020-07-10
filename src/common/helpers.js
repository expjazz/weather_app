import context from './context';
import elements from './elements';
import updateTempToDom from '../components/cityInfo';

const searchTemperature = async (e) => {
  e.preventDefault();
  const { citySearch } = elements.get();
  console.log('searchTemperature');
  const currentTemperature = await context.searchWeatherCity(citySearch.value);
  const { main, name, weather } = currentTemperature;
  updateTempToDom.cityInfo(name, main.temp, main.feels_like, main.temp_min, main.temp_max, weather[0].main, weather[0].description);
};

export default { searchTemperature };