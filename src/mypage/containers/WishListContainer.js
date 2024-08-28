import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TabMenus from '../../commons/components/TabMenus';
import { apiWishlist as getFestivalList } from '../../recommend/Festival/apis/apiInfo';
import { apiWishlist as getTourList } from '../../recommend/tour/apis/apiInfo';
import { apiWishlist as getReservation } from '../../reservation/apis/apiInfo';
import WishListItem from '../components/WishListItem';
import { WishListBox } from '../../commons/components/ImageListBox';
import Pagination from '../../commons/components/Pagination';
import styled from 'styled-components';
import { FcInspection } from 'react-icons/fc';

const WishListContainer = () => {
  const [menus, setMenus] = useState([]);
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [rootUrl, setRootUrl] = useState('');
  const { t } = useTranslation();
  const { tab } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const onChangePage = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    setMenus(() => [
      { name: t('예약'), link: '/mypage/wishlist/reservation' },
      { name: t('여행지'), link: '/mypage/wishlist/tour' },
      { name: t('축제'), link: '/mypage/wishlist/festival' },
      { name: t('게시글'), link: '/mypage/wishlist/board' },
    ]);

    let apiList = null;

    switch (tab) {
      case 'reservation':
        apiList = getReservation;
        setRootUrl(`/reservation/info`);
        break;
      case 'tour':
        apiList = getTourList;
        setRootUrl(`/recommend/tour`);
        break;
      case 'festival':
        apiList = getFestivalList;
        setRootUrl(`/recommend/festival`);
        break;
      default:
        apiList = getReservation;
        setRootUrl('reservation/info');
        return;
    }

    //if (!apiList) {
    //  return;
    //}

    (async () => {
      if (!apiList) {
        return;
      }

      try {
        const res = await apiList(currentPage, itemsPerPage);
        console.log('API Response:', res);
        setItems(res.items);
        setPagination(res.pagination);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [t, tab, currentPage, rootUrl]);

  return (
    <>
      <TabMenus items={menus} />
      <WishListBox>
        {items && items.length > 0 ? (
          <>
            <WishListItem items={items} />
          </>
        ) : (
          <NoData>
            {t('조회된_게시물이_없습니다')}
            <FcInspection />
          </NoData>
        )}
      </WishListBox>
      {items && items.length > 0 && (
        <Pagination
          onClick={onChangePage}
          pagination={pagination}
          rootUrl={rootUrl}
        />
      )}
    </>
  );
};

const NoData = styled.div`
  font-size: 1.5em;
  height: 100px;
  position: relative;
  top: 50px;
  left: 250px;
`;

export default React.memo(WishListContainer);
