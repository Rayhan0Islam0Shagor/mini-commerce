'use client';
import React from 'react';
import { useCartContext } from '@/context/Cart';
import { productType } from '@/types/product.type';
import CartItem from './CartItem';

const CartItems = () => {
  const { items } = useCartContext();

  return (
    <div className="rounded-lg md:w-2/3">
      {items?.map(
        ({ title, price, amount, category, image, id }: productType) => (
          <CartItem
            key={id}
            title={title}
            price={price}
            amount={amount}
            category={category}
            image={image}
          />
        ),
      )}
    </div>
  );
};

export default CartItems;
