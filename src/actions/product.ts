import { REACT_APP_BASE_URL } from '@/constants/urlConfig';
import { FilterType } from '@/types/filter.type';
import handleError from '@/utils/handleError';
import axios from 'axios';

export const getProducts = async (searchParams: FilterType) => {
  const filter = searchParams.filter;
  const sort = searchParams.sort || 'asc';

  if (searchParams && filter) {
    try {
      const { data } = await axios.get(
        `${REACT_APP_BASE_URL}/products/category/${filter}`,
      );

      return data;
    } catch (error) {
      console.log(handleError(error));
    }
  } else {
    try {
      const { data } = await axios.get(
        `${REACT_APP_BASE_URL}/products?sort=${sort}`,
      );

      return data;
    } catch (error) {
      console.log(handleError(error));
    }
  }
};

export const getProductById = async (id: number | string) => {
  try {
    const { data } = await axios.get(`${REACT_APP_BASE_URL}/products/${id}`);

    return data;
  } catch (error) {
    console.log(handleError(error));
  }
};
