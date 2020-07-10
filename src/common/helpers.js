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


  // console.log(currentTemperature.main);
  // console.log(currentTemperature.name);
  // console.log(currentTemperature.main.temp);
  // console.log(currentTemperature.main.feels_like);
  // console.log(currentTemperature.main.temp_min);
  // console.log(currentTemperature.main.temp_max);
  // console.log(currentTemperature.weather[0].main);
  // console.log(currentTemperature.weather[0].description);
};

export default { searchTemperature };