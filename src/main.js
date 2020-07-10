import context from './common/context';

const run = async () => {
  context.searchWeatherGeo();
  const a = await context.searchWeatherCity('london');
  console.log(a);
  console.log('test');
};
export default { run };