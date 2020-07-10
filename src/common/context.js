import weatherApi from './weatherApi';
import currentLocation from './currentGeoLocation';

const currentLocationWeather = currentLocation.geoLocation();
const weatherSearchResults = [];

const searchWeather = async (city) => {
  const data = await weatherApi.getWeatherCity('london', '586beec31912ba88b366b0309c325c56');
  // const position = navigator.geolocation.getCurrentPosition((datas) => datas);
  // console.log(position);
  geoData.geoLocation('586beec31912ba88b366b0309c325c56');
  // console.log(currentLocation);
  // const temp = await weatherApi.getWeatherGeo(datas.coords.latitude, datas.coords.longitude, '586beec31912ba88b366b0309c325c56');
};


export default { currentLocationWeather };