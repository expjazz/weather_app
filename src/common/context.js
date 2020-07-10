import weatherApi from './weatherApi';
import geoData from './currentGeoLocation';


const searchWeatherGeo = async () => {
  const temperature = await geoData.geoLocation('586beec31912ba88b366b0309c325c56');
  return temperature;
};

const searchWeatherCity = async (city) => {
  const temperature = await weatherApi.getWeatherCity(
    city,
    '586beec31912ba88b366b0309c325c56',
  );
  return temperature;
};

export default { searchWeatherGeo, searchWeatherCity };
