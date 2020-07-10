import weatherApi from './weatherApi';
import geoData from './currentGeoLocation';


const searchWeatherGeo = async () => {
  geoData.geoLocation('586beec31912ba88b366b0309c325c56');
};

const searchWeatherCity = async (city) => {
  const temperature = await weatherApi.getWeatherCity(
    city,
    '586beec31912ba88b366b0309c325c56',
  );
  return temperature;
};

export default { searchWeatherGeo, searchWeatherCity };
