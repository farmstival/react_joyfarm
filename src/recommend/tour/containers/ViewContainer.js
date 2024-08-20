import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import styled from 'styled-components';
=======
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
import { apiGet } from '../apis/apiInfo';
import Loading from '../../../commons/components/Loading';
import KakaoMap from '../../../map/KakaoMap';
import ItemImage from '../components/ItemImage';
import ItemDescription from '../components/ItemDescription';
<<<<<<< HEAD
=======
import styled from 'styled-components';
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
<<<<<<< HEAD
  max-width: 900px;
  margin: 0 auto;
=======
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
`;

const ViewContainer = ({ setPageTitle }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mapOptions, setMapOptions] = useState({ height: '400px', zoom: 3 });

  const { seq } = useParams();

  useEffect(() => {
    setLoading(true);

    apiGet(seq).then((item) => {
      setPageTitle(item.title);
      setItem(item);
      const position = { lat: item.latitude, lng: item.longitude };
      setMapOptions((opt) => {
        const options = item.latitude
          ? { ...opt, center: position, marker: position }
          : { ...opt, address: item.address };

        return options;
      });
    });

    setLoading(false);
  }, [seq, setPageTitle]);

  const onShowImage = useCallback((imageUrl) => {
    console.log('이미지 주소', imageUrl);
<<<<<<< HEAD
  }, []);
=======
  });
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293

  if (loading || !item) {
    return <Loading />;
  }

  return (
    <>
      <Wrapper>
        {item.photoUrl && (
          <ItemImage images={item.photoUrl} onClick={onShowImage} />
        )}
        <ItemDescription item={item} />
      </Wrapper>
<<<<<<< HEAD
      <Wrapper>
        <KakaoMap {...mapOptions} />
      </Wrapper>
=======
      <KakaoMap {...mapOptions} />
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
    </>
  );
};

export default React.memo(ViewContainer);
