import axios from 'axios';

const BASE_URL = 'sdfsdf';
const API_KEY = 'sdfsdf';

export const getImages = async (query, page) => {
  const params = {
    api_key: API_KEY,
    page,
    q: query,
  };

  try {
    const { data } = axios.get(BASE_URL, { params });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
