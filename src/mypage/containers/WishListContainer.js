import React, {useEffect, useState} from 'react';
import { useTransition } from 'react';
import TabMenus from '../../commons/components/TabMenus';

const WishListContainer = () => {
    const [menus, setMenus] = useState([]);
    const {t} = useTransition();

    useEffect(() => {
        setMenus(()=> 
        {name: t('식당'), link: my},
    )
    })
  return <></>;
};

export default React.memo(WishListContainer);
