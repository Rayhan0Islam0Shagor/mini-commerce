import { REACT_APP_BASE_URL } from '@/constants/urlConfig';
import { FilterType } from '@/types/filter.type';
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
      console.log('🚀 ~ file: product.ts:14 ~ getPosts ~ error:', error);
    }
  } else {
    try {
      const { data } = await axios.get(
        `${REACT_APP_BASE_URL}/products?sort=${sort}`,
      );

      return data?.sort(() => Math.random() - 0.5);
    } catch (error) {
      console.log('🚀 ~ file: product.ts:21 ~ getPosts ~ error:', error);
    }
  }
};

export const getProductById = async (id: number | string) => {
  try {
    const { data } = await axios.get(`${REACT_APP_BASE_URL}/products/${id}`);

    return data;
  } catch (error) {
    console.log('🚀 ~ file: product.ts:35 ~ GetProductById ~ error:', error);
  }
};
