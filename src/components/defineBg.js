import elements from '../common/elements';

const defineBg = (main) => {
  const { mainContainer } = elements.get();
  switch (main) {
    case 'Clouds':
      mainContainer.classList = 'cloudBg h-full';
      break;
    case 'Clear':
      mainContainer.classList = 'clearBg h-full';
      break;
    case 'Rain':
      mainContainer.classList = 'rainBg h-full';
      break;
    case 'Thunderstorm':
      mainContainer.classList = 'thunderBg h-full';
      break;
    default:
      mainContainer.classList = 'cloudBg h-full';
  }
};

export default { defineBg };