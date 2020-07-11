const farenCelsius = JSON.parse(localStorage.getItem('farenCelsius')) || {
  celsius: true,
  currentCity: 'London',
};

export default { farenCelsius };