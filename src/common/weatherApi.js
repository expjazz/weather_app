
const getWeatherCity = async (city, key) => {
  const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
  const data = await res.json();
  return data;
};

const getWeatherGeo = async (lat, lon, key) => {
  const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
  const data = await res.json();
  return data;
};

export default { getWeatherCity, getWeatherGeo };