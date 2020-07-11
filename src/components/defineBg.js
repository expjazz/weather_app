import elements from '../common/elements';

const defineBg = (main) => {
  const { mainContainer } = elements.get();
  switch (main) {
    case 'Clouds':
      mainContainer.classList = 'cloudBg';
      break;
    case 'Clear':
      mainContainer.classList = 'clearBg';
      break;
    case 'Rain':
      mainContainer.classList = 'rainBg';
      break;
    case 'Thunderstorm':
      mainContainer.classList = 'thunderBg';
      break;
    default:
      console.log('default');
  }
};

export default { defineBg };