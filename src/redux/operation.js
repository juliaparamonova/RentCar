import axios from 'axios';

axios.defaults.baseURL = 'https://66cb7fff4290b1c4f19a7f08.mockapi.io/';
axios.defaults.params = { page: 1, limit: 12 };

export const fetchCars = async params => {
  const { data } = await axios.get('adverts', {
    params: {
      ...params,
    },
  });
  return data;
};

// https://66cb7fff4290b1c4f19a7f08.mockapi.io/adverts
