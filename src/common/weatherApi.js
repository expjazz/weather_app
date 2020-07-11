const getWeatherCity = async (city, key, unit = 'metric') => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`);
  const data = await res.json();
  return data;
};

const getWeatherGeo = async (lat, lon, key, unit = 'metric') => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`);
  const data = await res.json();
  return data;
};

export default { getWeatherCity, getWeatherGeo };