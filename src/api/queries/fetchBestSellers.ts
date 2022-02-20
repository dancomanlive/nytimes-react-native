import axios from 'axios';
import {BASE_URL, API_KEY} from '@env';

interface ServerResponse {
  data: ServerData;
}

interface ServerData {
  results: Result;
}

export interface Result {
  books: Book[];
}

export interface Book {
  title: string;
  author: string;
  image: string;
  book_image: string;
  book_image_width: string;
  book_image_height: string;
  amazon_product_url: string;
  description: string;
  book_uri: string;
}

export const fetchBestSellers = async (category: string) => {
  try {
    const response: ServerResponse = await axios.get<ServerData>(
      BASE_URL + `/lists/current/${category}.json?api-key=${API_KEY}`,
    );
    return response?.data?.results?.books;
  } catch (error) {
    console.log(error);
  }
};
