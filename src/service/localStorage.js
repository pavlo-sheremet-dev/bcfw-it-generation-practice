export const getDataFromLS = (key, initialState = []) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? initialState;
  } catch (error) {
    localStorage.setItem(key, JSON.stringify(initialState));
    return initialState;
  }
};
