import { createContext, useState, useEffect, useContext } from 'react';
import { getWishList } from '../libs/wish/apiWish';
import UserInfoContext from '../../member/modules/UserInfoContext';

const WishListContext = createContext({
  states: {
    boardWish: [],
    tourWish: [],
    activityWish: [],
    festivalWish: [],
  },
  actions: {
    setBoardWish: null,
    setTourWish: null,
    setActivityWish: null,
    setFestivalWish: null,
  },
});

export const WishListProvider = ({ children }) => {
  const [boardWish, setBoardWish] = useState([]);
  const [tourWish, setTourWish] = useState([]);
  const [activityWish, setActivityWish] = useState([]);
  const [festivalWish, setFestivalWish] = useState([]);

  const value = {
    states: {
      boardWish,
      tourWish,
      activityWish,
      festivalWish,
    },
    actions: {
      setBoardWish,
      setTourWish,
      setActivityWish,
      setFestivalWish,
    },
  };

  const {
    states: { isLogin },
  } = useContext;

  useEffect(() => {
    if (!isLogin) {
      return;
    }

    (async () => {
      try {
        const boardWish = await getWishList('BOARD');
        const tourWish = await getWishList('TOUR');
        const activityWish = await getWishList('ACTIVITY');
        const festivalWish = await getWishList('FESTIVAL');

        setBoardWish(boardWish);
        setTourWish(tourWish);
        setActivityWish(activityWish);
        setFestivalWish(festivalWish);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [isLogin]);

  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};

export const { Consumer: WishListConsumer } = WishListContext;

export default WishListContext;
