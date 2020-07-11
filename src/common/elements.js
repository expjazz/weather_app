const get = () => ({
  mainContainer: document.getElementById('content'),
  searchForm: document.getElementById('searchForm'),
  citySearch: document.getElementById('citySearch'),
  cityField: document.getElementById('city'),
  tempField: document.getElementById('temperature'),
  mainField: document.getElementById('main'),
  descField: document.getElementById('description'),
  maxField: document.getElementById('max'),
  minField: document.getElementById('min'),
  feelsLikeField: document.getElementById('feelsLike'),
});

export default { get };