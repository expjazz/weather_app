import weatherApi from './weatherApi';
import metricDefinitor from '../components/farenCelsius';


const searchWeatherCity = async (city) => {
  const temp = metricDefinitor.farenCelsius.celsius;
  const metric = temp === true ? 'metric' : 'imperial';

  const temperature = await weatherApi.getWeatherCity(
    city,
    '586beec31912ba88b366b0309c325c56', metric,
  );
  return temperature;
};

export default { searchWeatherCity };
