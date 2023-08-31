import { productType } from '@/types/product.type';
import { priceFormat } from '@/utils/priceFormatter';
import React from 'react';

const ProductInfo = ({ product }: { product: productType }) => {
  return (
    <aside className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      <h2 className="text-sm title-font text-gray-500 tracking-widest">
        {product?.category}
      </h2>
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">
        {product?.title}
      </h1>
      <p className="leading-relaxed text-gray-900 pb-5">
        {product?.description}
      </p>

      <p className="mt-1 text-lg font-medium text-gray-900">
        {priceFormat(product.price)}
      </p>

      <button
        type="button"
        className="bg-gray-800 py-2 mt-4 px-4 text-lg text-white rounded-lg hover:bg-gray-700 active:bg-gray-600"
      >
        Add to cart
      </button>
    </aside>
  );
};

export default ProductInfo;
