import elements from './elements';
import helpers from './helpers';

const pageOne = () => {
  const { searchForm } = elements.get();
  searchForm.addEventListener('submit', helpers.searchTemperature);
};


export default { pageOne };