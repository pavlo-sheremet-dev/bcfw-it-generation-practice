import axios from 'axios';

axios.defaults.baseURL = 'https://63fc8441677c4158730d76fc.mockapi.io/api';

export async function getContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export const postContact = async newContact => {
  const { data } = await axios.post('/contacts', newContact);
  return data;
};

export const deleteAxios = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data.id;
};
