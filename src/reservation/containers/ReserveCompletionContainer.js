import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { myApiGet } from '../apis/apiInfo'; // 예약된 상세조회로 끌고옴 
import Loading from '../../commons/components/Loading';

const ReserveCompletionContainer = () => {
  const [data, setData] = useState(null);
  const { seq } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const res = await myApiGet(seq);
        setData(res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [seq]);

  if (!data) {
    return <Loading />;
  }
  console.log(data);
  return (
    <>
      <h2>예약 완료</h2>
    </>
  );
};

export default React.memo(ReserveCompletionContainer);
