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
    const { recipe } = data.data;

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
  } catch (err) {
    console.error(`${err} 🚨🚨🚨`);
    throw err;
  }
};
