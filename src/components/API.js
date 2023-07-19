import axios from 'axios';

const KEY = '8d41be39d2696eeff12b89d916a6c984';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const Api = async (url = ``) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const ApiTrending = () => {
  return Api(`trending/movie/day?api_key=${KEY}`);
};

export const ApiByQuery = (searchQuery) => {
  return Api(`/search/movie?api_key=${KEY}&query=${searchQuery}`);
}

export async function CompleteInformationFilm(id) {
   return  Api(`movie/${id}?api_key=${KEY}`);
}

export async function CastFilm(id) {
   return  Api(`movie/${id}/credits?api_key=${KEY}`);
}

export async function ReviewsFilm(id) {
   return  Api(`movie/${id}/reviews?api_key=${KEY}`);
}

