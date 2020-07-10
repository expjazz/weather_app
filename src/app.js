import pageOne from './pages/mainPage';
import run from './main';

const app = () => {
  run.run();

  pageOne.generator();
};

export default { app };