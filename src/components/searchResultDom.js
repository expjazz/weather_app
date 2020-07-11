import elements from '../common/elements';
import metric from './farenCelsius';
import bg from './defineBg';

const searchCityDom = (city, temperature, main, description, max, min, feelsLike) => {
  const {
    cityField, tempField, mainField, descField,
    maxField, minField, feelsLikeField, celsiusBtn, farenBtn,
  } = elements.get();
  const { celsius } = metric.farenCelsius;
  const deg = celsius === true ? '°C' : '°F';
  cityField.innerText = city;
  tempField.innerText = `${temperature} ${deg}`;
  mainField.innerText = `Main: ${main}`;
  descField.innerText = `Description: ${description}`;
  maxField.innerText = `Max: ${max} ${deg}`;
  minField.innerText = `Min: ${min} ${deg}`;
  bg.defineBg(main);
  feelsLikeField.innerText = `Feels Like: ${feelsLike} ${deg}`;
  if (celsius) {
    celsiusBtn.classList = 'w-1/4 hover:bg-red-900 px-1 text-white font-bold py-2 rounded bg-purple-800';
    farenBtn.classList = 'w-1/4 hover:bg-red-900 px-1 text-white font-bold py-2 rounded bg-purple-400';
  } else {
    celsiusBtn.classList = 'w-1/4 hover:bg-red-900 px-1 text-white font-bold py-2 rounded bg-purple-400';
    farenBtn.classList = 'w-1/4 hover:bg-red-900 px-1 text-white font-bold py-2 rounded bg-purple-800';
  }
  localStorage.setItem('farenCelsius', JSON.stringify(metric.farenCelsius));
};

export default { searchCityDom };