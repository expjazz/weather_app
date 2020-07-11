import context from './context';
import elements from './elements';
import updateTempToDom from '../components/searchResultDom';
import metricDefinitor from '../components/farenCelsius';


const searchTemperature = async (e) => {
  e.preventDefault();
  const { citySearch } = elements.get();
  const currentTemperature = await context.searchWeatherCity(citySearch.value);
  metricDefinitor.farenCelsius.currentCity = citySearch.value;
  const { main, name, weather } = currentTemperature;
  updateTempToDom.searchCityDom(name, main.temp, main.feels_like, main.temp_min, main.temp_max, weather[0].main, weather[0].description);
};


export default { searchTemperature };