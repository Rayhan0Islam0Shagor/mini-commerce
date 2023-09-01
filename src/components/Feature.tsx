'use client';
import * as React from 'react';
import Select from './common/Select';
import useCustomRouter from '@/hooks/useRouter';

interface FilterProps {
  categories: string[];
}

export type option = {
  filter: string;
  sort: string;
};

const Feature = ({ categories }: FilterProps) => {
  const sort: string[] = ['asc', 'desc'];
  const { pushQuery, query } = useCustomRouter();

  const handleSelect = (operation: string, operator: string) => {
    if (operation === 'filter') {
      pushQuery({
        filter: operator,
      });
    } else {
      pushQuery({
        sort: operator,
      });
    }
  };

  return (
    <section className="p-4 flex items-center justify-between flex-wrap">
      <h2 className="font-semibold text-xl">Products list</h2>

      <div className="flex items-center space-x-6 flex-wrap">
        <Select
          label="Filter by Category :"
          operation="filter"
          options={['All', ...categories]}
          handleSelect={handleSelect}
          selectedOption={query?.filter ? query?.filter : 'All'}
        />
        <Select
          label="Sort by :"
          operation="sort"
          options={sort}
          handleSelect={handleSelect}
          selectedOption={query?.sort ? query?.sort : 'asc'}
        />
      </div>
    </section>
  );
};

export default Feature;
