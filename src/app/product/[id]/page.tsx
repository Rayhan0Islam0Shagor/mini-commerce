import { getProductById } from '@/actions/product';
import Breadcrumb from '@/components/Breadcrumb';
import ProductInfo from '@/components/Product/ProductInfo';
import CustomImage from '@/components/common/CustomImage';
import { productType } from '@/types/product.type';

interface ProductDetailsProps {
  params: {
    id: number;
  };
}

const ProductDetails = async ({ params: { id } }: ProductDetailsProps) => {
  const product: productType = await getProductById(id);

  return (
    <section>
      <Breadcrumb title={product?.title} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 lg:w-4/5 mx-auto px-4">
        <CustomImage alt={product?.title} src={product?.image} />
        <ProductInfo product={product} />
      </div>
    </section>
  );
};

export default ProductDetails;
