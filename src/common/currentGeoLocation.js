import weatherApi from './weatherApi';

const geoLocation = async (key) => {
  let temp;
  navigator.geolocation.getCurrentPosition(async (data) => {
    temp = await weatherApi.getWeatherGeo(data.coords.latitude, data.coords.longitude, key);
  });
  return temp;
};

export default { geoLocation };