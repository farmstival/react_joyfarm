import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TabMenus from '../../commons/components/TabMenus';
import { apiWishlist as getFestivalList } from '../../recommend/Festival/apis/apiInfo';
import { apiWishlist as getTourList } from '../../recommend/tour/apis/apiInfo';
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
      { name: t('여행지'), link: '/mypage/wishlist/tour' },
      { name: t('게시글'), link: '/mypage/wishlist/board' },
      { name: t('축제'), link: '/mypage/wishlist/festival' },
    ]);

    let apiList = null;
    switch (tab) {
      case 'tour':
        apiList = getTourList;
        break;
      case 'board':
        break;
      default:
        apiList = getFestivalList;
        return;
    }

    if (!apiList){
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

  return (<>
  <TabMenus items={menus}/>
  {items && items.length > 0 ? <WishListItem items={items} pagination={pagination}/> : <Loading/>}
  </>);
};

export default React.memo(WishListContainer);
