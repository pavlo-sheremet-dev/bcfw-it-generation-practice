import axios from 'axios';

const API_KEY = '563492ad6f91700001000001639cabac73c74accb94b7bf7858095a0';
axios.defaults.baseURL = 'https://api.pexels.com/v1';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const params = {
    query,
    page,
  };
  const { data } = await axios.get('/search', { params });
  const { photos, total_results } = data;
  const images = photos.map(({ id, alt, src }) => ({
    id,
    alt,
    src: src.small,
  }));
  return { images, totalImages: total_results };
};
