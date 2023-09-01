'use client';
import CartItems from '@/components/Cart/CartItems';
import Subtotal from '@/components/Subtotal';
import { useCartContext } from '@/context/Cart';
import Image from 'next/image';
import Link from 'next/link';

const CartPage = () => {
  const { items, clearItems } = useCartContext();

  return (
    <div className="pt-12">
      {items?.length > 0 ? (
        <div>
          <button
            type="button"
            className="bg-gray-800 py-2 px-4 mb-4 text-lg text-white rounded-lg hover:bg-gray-700 active:bg-gray-600"
            onClick={clearItems}
          >
            Clear Cart
          </button>

          <div className="justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <CartItems />
            <Subtotal />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col">
          <Image
            src="/preview.png"
            alt="Empty cart"
            height={1200}
            width={630}
            className="object-contain"
          />

          <h1>Your Cart Empty</h1>
          <Link
            href="/"
            className="bg-gray-800 py-3 mt-4 px-6 text-lg text-white rounded-lg hover:bg-gray-700 active:bg-gray-600"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
