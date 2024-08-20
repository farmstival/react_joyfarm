/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../apis/apiInfo';
import Loading from '../../../commons/components/Loading';
import KakaoMap from '../../../map/KakaoMap';
import { useTranslation } from 'react-i18next';

const ViewContainer = ({
  center,
  marker,
  currentLocation, // 위치 기반
}) => {
  const [_center, setCenter] = useState(center ?? {});
  const mapRef = useRef(null);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mapOptions, setMapOptions] = useState({ height: '600px', zoom: 3 });

  const { seq } = useParams();

  useEffect(() => {
    setCenter(center);
  }, [center]);

  
  useEffect(() => {
    setLoading(true);

      if (currentLocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const { latitude, longitude } = pos.coords;
          setCenter({ lat: latitude, lng: longitude });
        });
      }

      const mapEl = mapRef.current;

      if(marker) {
        let _markers = marker;
        if (!Array.isArray(marker)) _markers = [marker];

        const markers = _markers.map((m) => {
          const { lat, lng, image, info } = m;
          const options = {
            position: new kakao.maps.LatLng(lat, lng),
          };

          markers.setMap(mapEl);
        })
        
      }      
    setLoading(false);
  }, [currentLocation, marker]);  

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
