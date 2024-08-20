import React from 'react';
import Form from './Form';

const WriteMain = ({ props }) => {
  //가져온 데이터 모두 넘겨줌(부모 자식 간 전달)
  return <Form {...props} />;
};

export default React.memo(WriteMain);
