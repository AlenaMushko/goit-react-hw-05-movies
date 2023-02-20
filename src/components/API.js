import axios from 'axios';

const KEY = '32432509d17cea42104bbb7507a382c7';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const Api = async (url = ``) => {
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const ApiTrending = () => {
  return Api(`trending/movie/day?api_key=${KEY}`);
};

export function ApiByQuery(searchQuery) {
  return Api(`/search/movie?api_key=${KEY}&query=${searchQuery}`);
}
