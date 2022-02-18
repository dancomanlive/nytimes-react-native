import axios from '@src/api/interceptors';
import {BASE_URL} from '@env';

export const fetch = async () => {
  try {
    const response = await axios.get(BASE_URL + '');
  } catch (error) {
    console.log(error);
  }
};
