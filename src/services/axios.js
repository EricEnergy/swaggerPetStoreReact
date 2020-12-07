import axios from 'axios';


export const getInventory = (status) => {
    const url = `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`;
    return axios({
      url,
      method: 'GET',
    });
  };
  