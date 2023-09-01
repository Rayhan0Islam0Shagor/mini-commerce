import { getCategories } from '@/actions/categories';
import Feature from '@/components/Feature';
import ProductList from '@/components/Product/ProductList';
import { FilterType } from '@/types/filter.type';

const Home = async ({ searchParams }: { searchParams: FilterType }) => {
  const categories: string[] = await getCategories();

  return (
    <>
      <Feature categories={categories} />
      <ProductList searchParams={searchParams} />
    </>
  );
};

export default Home;
