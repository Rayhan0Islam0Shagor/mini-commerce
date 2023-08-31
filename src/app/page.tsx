import { getCategories } from '@/actions/categories';
import Filter from '@/components/Filter';
import ProductList from '@/components/Product/ProductList';

const Home = async ({ searchParams }: { searchParams: {} }) => {
  const categories: string[] = await getCategories();

  return (
    <main className="">
      <Filter categories={categories} />
      <ProductList searchParams={searchParams} />
    </main>
  );
};

export default Home;
