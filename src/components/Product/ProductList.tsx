import { getProducts } from '@/actions/product';
import { productType } from '@/types/product.type';
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = async ({ searchParams }: { searchParams: {} }) => {
  const products: productType[] = await getProducts(searchParams);

  return (
    <section className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 my-6">
      {products?.map((product: productType) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
