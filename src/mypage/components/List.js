import React from 'react';
import ListItems from './ListItems';
import ListSearchForm from './ListSearchForm';

const List = ({items, search, onChange, onSubmitSearch }) => {
  // 검색 항목 제출
  return (
    <>
      <ListSearchForm search={search} onChange={onChange} onSubmit={onSubmitSearch} />
      <ListItems items={items} />
    </>
  );
};

export default React.memo(List);
