'use client';
import { useCartContext } from '@/context/Cart';
import CustomImage from '../common/CustomImage';
import { priceFormat } from '@/utils/priceFormatter';
import { ratingType } from '@/types/product.type';

interface CartItemProps {
  title: string;
  price: number;
  category: string;
  image: string;
  amount: number;
  id: number;
  description: string;
  rating: ratingType;
}

const CartItem = ({
  title,
  price,
  amount,
  category,
  image,
  id,
  description,
  rating,
}: CartItemProps) => {
  const { addItem, removeItem } = useCartContext();
  const handleIncrement = () => {
    addItem({
      title,
      price,
      category,
      image,
      id,
      description,
      rating,
      amount: 1,
    });
  };

  const handleDecrement = () => {
    removeItem({
      title,
      price,
      category,
      image,
      id,
      description,
      rating,
      amount: 1,
    });
  };

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-sm sm:flex sm:justify-start">
      <div className="w-full rounded-lg sm:w-40 h-40 overflow-hidden">
        <CustomImage src={image} alt={title} />
      </div>
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="mt-1 text-xs text-gray-700">{category}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={handleDecrement}
            >
              {' '}
              -{' '}
            </span>
            <span className="h-8 w-8 border bg-white text-center text-xs outline-none flex items-center justify-center font-semibold">
              {amount}
            </span>
            <span
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={handleIncrement}
            >
              {' '}
              +{' '}
            </span>
          </div>

          <p className="text-sm font-semibold text-right">
            {priceFormat(price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
