import axios from 'axios';

// base url defines the base url for youtube API 
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// options object contains configuration options for axios 
const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

// asyn function that takes a url and uses axios to make a get request to api by url 
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
// returns data received from api 
  return data;
};