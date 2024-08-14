import React, { useEffect, useState, useCallback } from 'react';
import { apiList } from '../apis/apiInfo';
import ItemsBox from '../../Festival/components/ItemsBox';
import SearchBox from '../componets/SearchBox';
import Pagination from '../../../commons/components/Pagination';

const ListContainer = () => {
  const [search, setSearch] = useState({});
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    apiList(search).then((res) => {
      setItems(res.items);
      setPagination(res.pagination);

      console.log(res);
    });
  }, [search]);

  return (
    <>
      <SearchBox search={search} />
      <ItemsBox items={items} />
      <Pagination />
    </>
  );
};

export default React.memo(ListContainer);
