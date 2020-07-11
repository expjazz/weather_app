import weatherApi from './weatherApi';
import metricDefinitor from '../components/farenCelsius';
import updateTempToDom from '../components/cityInfo';


const geoLocation = async (key = '586beec31912ba88b366b0309c325c56') => {
  navigator.geolocation.getCurrentPosition(async (data) => {
    const temp = metricDefinitor.farenCelsius.celsius;
    const metric = temp === true ? 'metric' : 'imperial';
    const currentTemperature = await weatherApi.getWeatherGeo(data.coords.latitude, data.coords.longitude, key, metric);
    const { main, name, weather } = currentTemperature;
    metricDefinitor.farenCelsius.currentCity = name;
    updateTempToDom.cityInfo(name, main.temp, main.feels_like, main.temp_min, main.temp_max, weather[0].main, weather[0].description);
  });
};

export default { geoLocation };
