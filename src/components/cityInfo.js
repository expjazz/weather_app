
const cityInfo = (city, temperature, main, description, max, min, feelsLike) => {
  const container = document.createElement('div');
  container.classList = 'mx-auto bg-blue-100 bg-opacity-75 max-w-sm rounded overflow-hidden shadow-lg';

  container.innerHTML = `
<div class="mx-auto bg-blue-100 bg-opacity-75 max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="text-center">
    <div class="font-bold text-xl mb-2">${city}</div>
    <p class="temperature text-3xl">${temperature}</p>
    <div class="subtitlecont">
      <button class="bg-purple-500 w-1/4 hover:bg-red-900 px-1 text-white font-bold py-2 rounded">Farenheit</button>
      <button class="bg-red-700 w-1/4 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">Celsius</button>
    </div>
    <ul>
      <li>Main: ${main}</li>
      <li>Description: ${description}/li>
      <li>Max: ${max}</li>
      <li>Min: ${min}</li>
      <li>Feels Like: ${feelsLike}</li>

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
};