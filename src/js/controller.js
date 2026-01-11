import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
const recipesContainer = document.querySelector('.recipe');
console.log(recipesContainer);

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error('Error caught in controller:', err);
    recipeView.renderError();
  }
};

// ['hashchange', 'load'].forEach(e => window.addEventListener(e, showRecipe));
const init = function () {
  recipeView.addHandlerRender(showRecipe);
};
init();
