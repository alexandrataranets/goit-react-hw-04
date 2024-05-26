import axios from 'axios';

const API_KEY = 'yxqZHty_lXhPbuqi8w064aC3lKdb8-SqjchjRskuVPk';
const BASE_URL = 'https://api.unsplash.com';

export const getPictures = async (query, page = 1, per_page = 12) => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page,
      client_id: API_KEY,
    },
  });
  return response.data.results;
};