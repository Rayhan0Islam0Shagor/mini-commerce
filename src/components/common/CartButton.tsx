'use client';
import { useCartContext } from '@/context/Cart';
import { productType } from '@/types/product.type';
import React from 'react';

const CartButton = ({ product }: { product: productType }) => {
  const cartContext = useCartContext();

  const cartItemAddHandler = (item: productType) => {
    cartContext.addItem({
      ...item,
      amount: 1,
    });
  };

  return (
    <button
      type="button"
      className="bg-gray-800 py-2 px-4 text-lg text-white rounded-lg hover:bg-gray-700 active:bg-gray-600"
      onClick={() => cartItemAddHandler(product)}
    >
      Add to cart
    </button>
  );
};

export default CartButton;