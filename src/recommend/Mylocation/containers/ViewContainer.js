import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../apis/apiInfo';
import Loading from '../../../commons/components/Loading';
import KakaoMap from '../../../map/KakaoMap';

const ViewContainer = ({ setSubPageTitle }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mapOptions, setMapOptions] = useState({ height: '400px', zoom: 3 });

  const { seq } = useParams();

  useEffect(() => {
    setLoading(true);

    apiGet(seq).then((item) => {
      setSubPageTitle(item.title);
      setItem(item);

      setMapOptions((opt) => {
        const options = 
         {currentLocation: true,
            zoom: 3};
        return options;
      });
    });

    setLoading(false);
  }, [seq, setSubPageTitle]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <KakaoMap {...mapOptions} />
    </>
  );
};

export default React.memo(ViewContainer);
