import pageOne from './pages/mainPage';
import run from './main';

const app = () => {
  pageOne.generator();
  run.run();
};

export default { app };