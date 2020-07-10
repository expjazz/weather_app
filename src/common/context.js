import weatherApi from './weatherApi';
import geoData from './currentGeoLocation';
import metricDefinitor from '../components/farenCelsius';

const searchWeatherGeo = async () => {
  geoData.geoLocation('586beec31912ba88b366b0309c325c56');
};

const searchWeatherCity = async (city) => {
  const temp = metricDefinitor.farenCelsius.celsius;
  const metric = temp === true ? 'metric' : 'imperial';
  const temperature = await weatherApi.getWeatherCity(
    city,
    '586beec31912ba88b366b0309c325c56', metric,
  );
  return temperature;
};

export default { searchWeatherGeo, searchWeatherCity };
