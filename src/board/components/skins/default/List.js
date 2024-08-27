import React from 'react';
import ListItems from './ListItems';
import ListSearchForm from './ListSearchForm';

const List = ({ items, search, onChange }) => {
  // 검색 항목 제출
  return (
    <>
      <ListItems items={items} />
      <ListSearchForm search={search} onSubmit={onChange} />
    </>
  );
};

export default React.memo(List);
