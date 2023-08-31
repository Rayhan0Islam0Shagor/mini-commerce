import { REACT_APP_BASE_URL } from '@/constants/urlConfig';
import axios from 'axios';

export const getCategories = async () => {
  try {
    const { data } = await axios.get(
      `${REACT_APP_BASE_URL}/products/categories`,
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
