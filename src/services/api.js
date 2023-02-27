import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
export const PER_PAGE = 5;

export const fetchPosts = async ({ signal, page = 1 }) => {
  try {
    const { data } = await axios.get('/posts', {
      signal,
      params: { limit: PER_PAGE, page, sortBy: 'createdAt', order: 'desc' },
    });
    const { posts, totalPosts } = data;
    return {
      results: {
        posts: serializePosts(posts),
        totalPosts,
        page,
        perPage: PER_PAGE,
      },
      isCancel: false,
    };
  } catch (error) {
    if (axios.isCancel(error)) {
      return {
        results: null,
        isCancel: true,
      };
    }
    throw new Error(error);
  }
};

export const fetchPost = async ({ id, signal = null }) => {
  try {
    const { data: post } = await axios.get(`/posts/${id}`, {
      signal,
    });
    return {
      results: {
        post,
      },
      isCancel: false,
    };
  } catch (error) {
    if (axios.isCancel(error)) {
      return {
        results: null,
        isCancel: true,
      };
    }
    throw new Error(error);
  }
};

const serializePosts = data =>
  data.map(({ id, title, createdAt }) => ({ id, title, createdAt }));
