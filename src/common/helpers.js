/* eslint-disable no-alert */
import context from './context';
import elements from './elements';
import updateTempToDom from '../components/searchResultDom';
import metricDefinitor from '../components/farenCelsius';


const searchTemperature = async (e) => {
  const { citySearch, loadingTag } = elements.get();
  loadingTag.classList.remove('opacity-0');
  e.preventDefault();

  const currentTemperature = await context.searchWeatherCity(citySearch.value);
  if (currentTemperature.message) {
    loadingTag.classList.add('opacity-0');
    alert('City Not Found');
    return;
  }
  metricDefinitor.farenCelsius.currentCity = citySearch.value;
  const { main, name, weather } = currentTemperature;
  updateTempToDom.searchCityDom(name, main.temp, weather[0].main,
    weather[0].description, main.temp_max, main.temp_min, main.feels_like);
  loadingTag.classList.add('opacity-0');
};


export default { searchTemperature };
