import weatherApi from './weatherApi';

const geoLocation = async (key) => {
  const temp = [];
  navigator.geolocation.getCurrentPosition(async (data) => {
    const currentTemperature = await weatherApi.getWeatherGeo(data.coords.latitude, data.coords.longitude, key);
    const { main, name, weather }
    updateTempToDom(name, main.temp, main.feels_like, main.temp_min, main.temp_max, weather[0].main, weather[0].description)
  });
};

export default { geoLocation };
