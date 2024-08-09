import React from 'react';
import KakaoMap from '../../map/KakaoMap';

const markers = [
  { lat: 37.611846, lng: 126.834059 },
  { lat: 37.62996088113178, lng: 126.86297178268433 },
  { lat: 37.6471792, lng: 126.8951905 },
];

const options = {
  center: { lat: 37.62996088113178, lng: 126.86297178268433 },
  zoom: 3,
  marker: markers,
};

const Main = () => {
  return <KakaoMap {...options} />;
};

export default React.memo(Main);
