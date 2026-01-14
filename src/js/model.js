import { API_URL } from './config';
import { getJSON } from './helpers';
export const state = {
  res: {},
  search: {
    query: '',
    results: [],
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    const { recipe } = data.data; // صححت الاسم من res -> recipe

    state.res = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(state.res);
    console.log(data);
  } catch (err) {
    console.error(`${err} 🚨🚨🚨`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  state.search.query = query;
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log('dataaaa', data);

    state.search.results = data.data.recipes.map(res => {
      return {
        id: res.id,
        title: res.title,
        publisher: res.publisher,
        image: res.image_url,
      };
    });
    // console.log('query : ', state.search.query);
    // console.log('results : ', state.search.results);
  } catch (err) {
    console.error(`${err} 🚨🚨🚨`);
    throw err;
  }
};
