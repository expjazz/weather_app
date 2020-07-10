import pageOne from './pages/mainPage';
import run from './main';

const app = () => {
  // getWeatherData.get();
  run.run(); // async

  pageOne.generator();
};

export default { app };