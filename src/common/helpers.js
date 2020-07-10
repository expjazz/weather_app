import context from './context';
import elements from './elements';

const searchTemperature = async (e) => {
  const { citySearch } = elements.get();
  e.preventDefault();
  console.log('object');
  const currentTemperature = await context.searchWeatherCity(citySearch.value);
};

export default { searchTemperature };