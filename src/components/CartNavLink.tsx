'use client';

import { useCartContext } from '@/context/Cart';
import Link from 'next/link';
import { GrCart } from 'react-icons/gr';

const CartNavLink = () => {
  const { items } = useCartContext();

  return (
    <Link href="/cart" className="flex items-center space-x-3 text-lg">
      <div className="relative ">
        <GrCart className="text-2xl" />

        <span className="absolute -top-2 -right-3 bg-black text-white w-5 h-5 text-sm flex- items-center justify-center text-center rounded-full">
          {items?.length}
        </span>
      </div>{' '}
      <span>Cart</span>
    </Link>
  );
};

export default CartNavLink;
