import weatherApi from './weatherApi';
import metricDefinitor from '../components/farenCelsius';
import updateTempToDom from '../components/cityInfo';
import elements from './elements';

const geoLocation = async (key = '586beec31912ba88b366b0309c325c56') => {
  navigator.geolocation.getCurrentPosition(async (data) => {
    const { loadingTag } = elements.get();
    loadingTag.classList.remove('opacity-0');
    const temp = metricDefinitor.farenCelsius.celsius;
    const metric = temp === true ? 'metric' : 'imperial';
    const currentTemperature = await weatherApi.getWeatherGeo(data.coords.latitude,
      data.coords.longitude, key, metric);
    const { main, name, weather } = currentTemperature;
    metricDefinitor.farenCelsius.currentCity = name;
    updateTempToDom.cityInfo(name, main.temp, weather[0].main,
      weather[0].description, main.temp_max, main.temp_min, main.feels_like);
    loadingTag.classList.add('opacity-0');
  });
};

export default { geoLocation };
