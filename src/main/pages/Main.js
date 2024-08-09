import React from 'react';
import KakaoMap from '../../map/KakaoMap';

const markers = [
  {
    lat: 37.579617,
    lng: 126.977041,
    info: {content: '<h1>output</h1>', removable: true},
    //removable: 상단에 x 버튼으로 인포 지우기 가능
    //content가 있으면 노출
  },
  {
    lat: 37.5814696,
    lng: 126.9849519,
    //특정 마커 이미지 설정
    image:
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
    info: { content: '<h1>output2</h1>',
    clickable: true}, //클릭 시 토글 형태로 인포윈도우 노출
  },
  { lat: 37.5758772, lng: 126.9768121 },
];

const options = {
  currentLocation: true, //현재 위치 기준
  //address: "서울 종로구 사직로 161", //주소로 장소 찾기
  center: { 
    lat: 37.579617, 
    lng: 126.977041, 
  }, //가운데 위치 기준값

  zoom: 4,
  marker: markers, //주소 기반으로 마커 표기하도록 수정할 예정
  markerImage:
    'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
}; //마커 전체의 공통 이미지

const Main = () => {
  return <KakaoMap {...options} />; //비구조 할당으로 추가 옵션 주입
};

export default React.memo(Main);
