import context from './context';
import elements from './elements';

const searchTemperature = async (e) => {
  e.preventDefault();
  const { citySearch } = elements.get();
  console.log('object');
  const currentTemperature = await context.searchWeatherCity(citySearch.value);
  console.log(currentTemperature);
  console.log(currentTemperature.main);
  console.log(currentTemperature.name);
  console.log(currentTemperature.main.temp);
  console.log(currentTemperature.main.feels_like);
  console.log(currentTemperature.main.temp_min);
  console.log(currentTemperature.main.temp_max);
  console.log(currentTemperature.weather[0].main);
  console.log(currentTemperature.weather[0].description);
};

export default { searchTemperature };