import elements from '../common/elements';
import eventListeners from '../common/eventListeners';

const generator = () => {
  const { mainContainer } = elements.get();
  mainContainer.innerHTML = `
  <div class="mx-auto  pt-16 w-full max-w-xs">
  <form class="bg-white bg-blue-100 bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4" id="searchForm">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="citySearch">
        Type in the city you want to check the temperature.
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="citySearch" type="text" placeholder="Username">
    </div>

  </form>

</div>
<div class="mx-auto bg-blue-100 bg-opacity-75 max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="text-center">
    <div class="font-bold text-xl mb-2">${'cityname'}</div>
    <p class="temperature text-3xl">Temperature</p>
    <div class="subtitlecont">
      <button class="bg-purple-500 w-1/4 hover:bg-red-900 px-1 text-white font-bold py-2 rounded">Farenheit</button>
      <button class="bg-red-700 w-1/4 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">Celsius</button>
    </div>
    <ul>
      <li>Main: something</li>
      <li>Description: something</li>
      <li>Max: something</li>
      <li>Min: something</li>
      <li>Feels Like: something</li>

    </ul>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
</div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
  </div>
</div>
  `;
  console.log('pgnOne');
  eventListeners.pageOne();
};

export default { generator };