import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiList } from '../apis/apiInfo';
import ItemsBox from '../components/ItemsBox';
import SearchBox from '../components/SearchBox';
import Pagination from '../../../commons/components/Pagination';
import Loading from '../../../commons/components/Loading';
<<<<<<< HEAD

function getQueryString(searchParams) {
  const qs = {};
=======
import KakaoMap from '../../../map/KakaoMap';
import { ImageListBox } from '../../../commons/components/ImageListBox';

function getQueryString(searchParams) {
  const qs = { limit: 9 };
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
  if (searchParams.size > 0) {
    for (const [k, v] of searchParams) {
      qs[k] = v;
    }
  }
  return qs;
}

const ListContainer = () => {
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState(() => getQueryString(searchParams));
  const [search, setSearch] = useState(() => getQueryString(searchParams));
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiList(search).then((res) => {
      setItems(res.items);
      setPagination(res.pagination);
<<<<<<< HEAD
      setLoading(false);
=======
      setTimeout(function () {
        setLoading(false);
      }, 500);
      // setLoading(false); -> setTimeout 하지 않을 때는 주석 해제!
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
    });
  }, [search]);

  /* 검색 관련 함수 */
  const onChangeSearch = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: [e.target.value] }));
  }, []);

  const onSubmitSearch = useCallback(
    (e) => {
      e.preventDefault();
      setSearch({ ...form, page: 1 });
    },
    [form],
  );

  /* 페이지 변경 함수 */
  const onChangePage = useCallback((p) => {
    setSearch((search) => ({ ...search, page: p }));
  }, []);

<<<<<<< HEAD
  // 로딩 처리
=======
  /* 로딩 처리 */
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <SearchBox
        form={form}
        onChange={onChangeSearch}
        onSubmit={onSubmitSearch}
      />
<<<<<<< HEAD
      <ItemsBox items={items} />
=======
      <ImageListBox className="List-box">
        <ItemsBox items={items} />
      </ImageListBox>
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
      {items.length > 0 && (
        <Pagination onClick={onChangePage} pagination={pagination} />
      )}
    </>
  );
};

export default React.memo(ListContainer);
