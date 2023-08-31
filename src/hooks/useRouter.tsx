import { useRouter, useSearchParams } from 'next/navigation';

const useCustomRouter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = {
    filter: '',
    sort: '',
  };

  const filter = searchParams.get('filter');
  const sort = searchParams.get('sort');

  if (filter) query.filter = filter;
  if (sort) query.sort = sort;

  const pushQuery = ({ filter, sort }: { filter: string; sort: string }) => {
    if (filter !== undefined) {
      filter === '' ? query.filter : (query.filter = filter);
    }

    if (sort !== undefined) {
      sort === 'createAt' ? query.sort : (query.sort = sort);
    }

    const newQuery = new URLSearchParams(query).toString();

    router.push(`?${newQuery}`);
  };

  return {
    pushQuery,
    query,
  };
};

export default useCustomRouter;
