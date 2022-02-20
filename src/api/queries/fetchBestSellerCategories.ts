import axios from 'axios';
import {BASE_URL, API_KEY} from '@env';

interface ServerResponse {
  data: ServerData;
}

interface ServerData {
  results: Category[];
}

export interface Category {
  display_name: string;
  list_name_encoded: string;
}

export const fetchBestSellerCategories = async () => {
  try {
    const response: ServerResponse = await axios.get<ServerData>(
      BASE_URL + `/lists/names.json?api-key=${API_KEY}`,
    );
    return response?.data?.results;
  } catch (error) {
    console.log(error);
  }
};
