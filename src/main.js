import currentGeo from './common/currentGeoLocation';

const run = async () => {
  try {
    currentGeo.geoLocation();
  } catch (e) {
    console.error(e);
  } finally {
    console.log('a');
  }
};
export default { run };