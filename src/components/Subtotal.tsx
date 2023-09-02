'use client';

import { useCartContext } from '@/context/Cart';
import { priceFormat } from '@/utils/priceFormatter';
import { useState } from 'react';
import Loader from './common/Loader';
import { useRouter } from 'next/navigation';

const Subtotal = () => {
  const router = useRouter();
  const { clearItems, totalAmount } = useCartContext();
  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    setLoading(true);

    setTimeout(() => {
      router.push('/success');
      setLoading(false);
      clearItems();
    }, 3000);
  };

  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">{priceFormat(totalAmount)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">$0.00</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">{priceFormat(totalAmount)}</p>
        </div>
      </div>
      <button
        className="bg-gray-800 py-3 mt-4 px-6 text-lg text-white rounded-lg hover:bg-gray-700 active:bg-gray-600 w-full"
        onClick={handleCheckout}
      >
        {loading ? <Loader /> : 'Check out'}
      </button>
    </div>
  );
};

export default Subtotal;
