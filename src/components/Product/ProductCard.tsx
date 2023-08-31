import { productType } from '@/types/product.type';
import { priceFormat } from '@/utils/priceFormatter';
import Link from 'next/link';
import { FaStar, FaTag } from 'react-icons/fa';
import CartButton from '../common/CartButton';

const ProductCard = ({ product }: { product: productType }) => {
  return (
    <div className="group shadow-sm rounded-md flex items-center w-full flex-col">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
        <Link href={`/product/${product?.id}`} className="p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover object-center group-hover:opacity-90"
          />
        </Link>
      </div>

      <div className="px-4 py-2 flex-1 flex flex-col w-full">
        <div className="flex items-center space-x-2">
          {new Array(Math.ceil(product?.rating?.rate))
            .fill('')
            .map((_, idx) => (
              <FaStar key={idx} className="h-5 text-yellow-400" />
            ))}

          <p className="text-sm ml-5 font-semibold">{product?.rating?.count}</p>
        </div>
        <div className="mt-2 flex items-center space-x-2">
          <FaTag />{' '}
          <span className="text-sm font-bold">{product?.category}</span>
        </div>
        <h3 className="mt-2 text-base text-gray-700">{product.title}</h3>

        <div className="flex-1" />

        <div className="flex items-center justify-between pt-4">
          <p className="mt-1 text-lg font-medium text-gray-900">
            {priceFormat(product.price)}
          </p>

          <CartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
