import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TabMenus from '../../commons/components/TapMenus';
import { apiWishList as getReservationList } from '../../reservation/apis/apiInfo';
import Loading from '../../commons/components/Loading';
import WishListItem from '../components/WishListItem';

const WishListContainer = () => {
  const [menus, setMenus] = useState([]);
  const [items, setItems] = useState();
  const [pagination, setPagination] = useState();
  const { t } = useTranslation();
  const { tab } = useParams();

  useEffect(() => {
    setMenus(() => [
      { name: t('예약'), link: '/mypage/wishlist/reservation' },
      { name: t('게시글'), link: '/mypage/wishlist/board' },
      { name: t('여행지'), link: '/mypage/wishlist/tour' },
    ]);

    let apiList = null;
    switch (tab) {
      case 'board':
        break;
      case 'tour':
        break;
      default:
        apiList = getReservationList;
        return;
    }

    if (!apiList) {
      return;
    }

    (async () => {
      try {
        const res = await apiList();
        setItems(res.items);
        setPagination(res.pagination);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [t, tab]);

  return (
    <>
      <TabMenus items={menus} />
      {items && items.length > 0 ? (
        <WishListItem items={items} pagination={pagination} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default React.memo(WishListContainer);
