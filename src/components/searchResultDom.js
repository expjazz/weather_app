import elements from '../common/elements';

const searchCityDom = (city, temperature, main, description, max, min, feelsLike) => {
  const {
    cityField, tempField, mainField, descField, maxField, minField, feelsLikeField,
  } = elements.get();
  cityField.innerText = city;
  tempField.innerText = temperature;
  mainField.innerText = main;
  descField.innerText = description;
  maxField.innerText = max;
  minField.innerText = min;
  feelsLikeField.innerText = feelsLike;
};

export default { searchCityDom };