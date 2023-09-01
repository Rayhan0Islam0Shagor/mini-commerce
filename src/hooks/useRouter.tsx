import { useRouter, useSearchParams } from 'next/navigation';

interface Query {
  filter?: string;
  sort?: string;
}

const useCustomRouter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query: Query = {
    filter: '',
    sort: '',
  };

  // get features from search params
  const filter = searchParams.get('filter');

  const sort = searchParams.get('sort');

  // set features from search params to query
  filter
    ? (query.filter = filter)
    : filter === 'All'
    ? delete query.filter
    : delete query.filter;
  sort ? (query.sort = sort) : delete query.sort;

  const pushQuery = ({ filter, sort }: { filter?: string; sort?: string }) => {
    if (filter !== undefined) {
      filter === 'All' ? delete query.filter : (query.filter = filter);
      delete query.sort;
    }

    if (sort !== undefined) {
      sort === 'asc' ? delete query.sort : (query.sort = sort);
      delete query.filter;
    }

    const newQuery = new URLSearchParams(query as string).toString();
    router.push(`?${newQuery}`);
  };

  return {
    pushQuery,
    query,
  };
};

export default useCustomRouter;
