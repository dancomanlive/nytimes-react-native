import axios from 'axios';
import {BASE_URL} from '@env';

interface LoginProps {
  email: string;
  password: string;
}

export const login = async (data: LoginProps) => {
  try {
    const response = await axios.post(BASE_URL + '...', data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(BASE_URL + '...', null);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
