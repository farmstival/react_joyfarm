import { createContext, useState, useEffect, useContext } from 'react';
import { getWishList } from '../libs/wish/apiWish';
import UserInfoContext from '../../member/modules/UserInfoContext';
const WishListContext = createContext({
  states: {
    boardWish: [],
    tourWish: [],
    festivalWish: [],
    activityWish: [],
  },
  actions: {
    setBoardWish: null,
    setTourWish: null,
    setFestivalWish: null,
    setActivityWish: null,
  },
});

export const WishListProvider = ({ children }) => {
  const [boardWish, setBoardWish] = useState([]);
  const [tourWish, setTourWish] = useState([]);
  const [festivalWish, setFestivalWish] = useState([]);
  const [activityWish, setActivityWish] = useState([]);
  const value = {
    states: {
      boardWish,
      tourWish,
      festivalWish,
      activityWish,
    },
    actions: {
      setBoardWish,
      setTourWish,
      setFestivalWish,
      setActivityWish,
    },
  };

  const { states: { isLogin }} = useContext(UserInfoContext);

  useEffect(() => {
    if(!isLogin) {
      return;
    }
  })

  useEffect(() => {
    (async () => {
      try {
        const boardWish = await getWishList('BOARD');
        const tourWish = await getWishList('TOUR');
        const festivalWish = await getWishList('FESTIVAL');
        const activityWish = await getWishList('ACTIVITY');

        setBoardWish(boardWish);
        setTourWish(tourWish);
        setFestivalWish(festivalWish);
        setActivityWish(activityWish);
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
