import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../apis/apiInfo';
import Loading from '../../commons/components/Loading';

const ReserveCompletionContainer = () => {
  const [data, setData] = useState(null);
  const { seq } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const res = await apiGet(seq);
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
