import elements from '../common/elements';
import eventListeners from '../common/eventListeners';

const generator = () => {
  const { mainContainer } = elements.get();
  mainContainer.classList.add('defaultBg');
  mainContainer.innerHTML = `
  <div class="mx-auto  pt-16 w-full max-w-xs">
  <form class="bg-white bg-blue-100 bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4" id="searchForm">
    <div class="mb-4">
      <p class="loading opacity-0">Loading</p>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="citySearch">
        Type in the city you want to check the temperature.
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="citySearch" type="text" placeholder="Username">
    </div>

  </form>

</div>
  `;
  eventListeners.pageOne();
};

export default { generator };