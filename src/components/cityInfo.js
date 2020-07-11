import elements from '../common/elements';
import metric from './farenCelsius';
import tempToggler from '../common/celsiusToFarToggler';

const cityInfo = (city, temperature, main, description, max, min, feelsLike) => {
  const { mainContainer } = elements.get();
  const container = document.getElementById('addWeatherToDom') || document.createElement('div');
  container.id = 'addWeatherToDom';

  container.classList = 'mx-auto bg-blue-100 bg-opacity-75 max-w-sm rounded overflow-hidden shadow-lg';

  container.innerHTML = `
<div class="mx-auto bg-blue-100 bg-opacity-75 max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="text-center">
    <div class="font-bold text-xl mb-2" id='city'>${city}</div>
    <p class="temperature text-3xl" id='temperature'>${temperature} ${metric.farenCelsius.celsius === true ? '°C' : '°F'}</p>
    <div class="tempToggler">
      <button class="w-1/4 hover:bg-red-900 px-1 text-white font-bold py-2 rounded ${metric.farenCelsius.celsius === true ? 'bg-purple-400' : 'bg-purple-800'}" id='imperial'>Farenheit</button>
      <button class="bg-red-700 w-1/4 hover:bg-red-900 text-white font-bold py-2 px-4 rounded ${metric.farenCelsius.celsius === true ? 'bg-purple-800' : 'bg-purple-400'}" id='metric'>Celsius</button>
    </div>
    <ul>
      <li id='main'>Main: ${main}</li>
      <li id='description'>Description: ${description} </li>
      <li id='max'>Max: ${max}</li>
      <li id='min'>Min: ${min}</li>
      <li id='feelsLike'>Feels Like: ${feelsLike}</li>

    </ul>

  </div>
</div>

</div>

`;
  mainContainer.appendChild(container);
  Array.from(document.querySelector('.tempToggler').children).forEach((btn) => btn.addEventListener('click', tempToggler.celsiusToFaren));
};

export default { cityInfo };