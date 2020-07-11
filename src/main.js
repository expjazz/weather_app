import currentGeo from './common/currentGeoLocation';
import generator from './components/cityInfo';

const run = async () => {
  currentGeo.geoLocation();
  if (!document.getElementById('addWeatherToDom')) {
    generator.cityInfo('', '', '', '', '', '', '');
  }
};
export default { run };