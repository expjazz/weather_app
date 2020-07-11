/* eslint-disable no-alert */
import context from './context';
import elements from './elements';
import updateTempToDom from '../components/searchResultDom';
import metricDefinitor from '../components/farenCelsius';


const searchTemperature = async (e) => {
  const { citySearch, loadingTag } = elements.get();
  loadingTag.classList.remove('opacity-0');
  e.preventDefault();

  context.searchWeatherCity(citySearch.value).then((currentTemperature) => {
    metricDefinitor.farenCelsius.currentCity = citySearch.value;
    const { main, name, weather } = currentTemperature;
    updateTempToDom.searchCityDom(name, main.temp, weather[0].main,
      weather[0].description, main.temp_max, main.temp_min, main.feels_like);
    loadingTag.classList.add('opacity-0');
  }).catch(() => {
    alert('There is no city found'); loadingTag.classList.add('opacity-0');
  });
};


export default { searchTemperature };
