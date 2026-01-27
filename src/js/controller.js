import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultView from './views/resultView';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);
    recipeView.render(model.state.res);
  } catch (err) {
    console.error('Error caught in controller:', err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    resultView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

// controlSearchResults();
// ['hashchange', 'load'].forEach(e => window.addEventListener(e, showRecipe));
const init = function () {
  recipeView.addHandlerRender(showRecipe);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
