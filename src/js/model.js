import { API_URL } from './config';
import { getJSON } from './helpers';
export const state = {
  res: {},
  search: {
    query: '',
    results: [],
  },
};

export const loadres = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    const { res } = data.data;

    state.res = {
      id: res.id,
      title: res.title,
      publisher: res.publisher,
      sourceUrl: res.source_url,
      image: res.image_url,
      servings: res.servings,
      cookingTime: res.cooking_time,
      ingredients: res.ingredients,
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
    console.log('query : ', state.search.query);
    console.log('results : ', state.search.results);
  } catch (err) {
    console.error(`${err} 🚨🚨🚨`);
    throw err;
  }
};

loadSearchResults('pizza');
