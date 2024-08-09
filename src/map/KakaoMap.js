/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from 'react';
import { RiMicOffLine } from 'react-icons/ri';
import styled, { css } from 'styled-components'; //스타일 컴포넌트

//스타일 컴포넌트
//props 값이 없으면 기본값 부여
const MapArea = styled.div`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '38.5rem'};
`;

//옵션은 props 값 받아서 사용
const KakaoMap = ({ 
  width, 
  height, 
  center, 
  zoom, 
  marker, 
  markerImage, 
  currentLocation, //위치 기반
  address, //주소
 }) => {
  const [_center, setCenter] = useState(center ?? {});
  const mapRef = useRef(null); //컴포넌트 내에서 선택할 때 사용

    //현재 위치 기반 s
    useEffect(()=>{
      if (currentLocation) {
        navigator.geolocation.getCurrentPosition((pos)=>{
          const{ latitude, longitude} = pos.coords;
          setCenter({ lat : latitude, lng: longitude});
        });
      }
    }, [currentLocation]);
      //현재 위치 기반 e

      //주소로 가운데 배치 s
    useEffect(()=>{
      if(!address?.trim()) return;

      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(address, (items, status)=>{
        if (status === kakao.maps.services.Status.OK) { //대소문자 무시할 것..
          setCenter({lat:items[0].y, lng:items[0].x});
        }
      });
    }, [address]);
      //주소로 가운데 배치 e

  useEffect(() => {
    //변할 때마다 로딩
    const mapEl = mapRef.current;

    // let _center = center ?? {}; //부모 객체의 값은 동결상태이기 때문에 변경 불가-> 따로 변수에 담아서 사용

    //지도 가운데 배치 S
    const position = new kakao.maps.LatLng(
      _center?.lat ?? 37.579617,
      _center?.lng ?? 126.977041,
    );
    //위도, 경도가 없는 경우 기본값으로 대체, 옵셔널 체이닝
    const map = new kakao.maps.Map(mapEl, {
      center: position,
      level: zoom || 3,
    });
    //지도 가운데 배치 E

    //마커 출력 S
    if (marker) {
      let _markers = marker;
      if (!Array.isArray(marker)) _markers = [marker]; //마커가 배열로 들어오지 않은 경우
      // _markers = _markers.filter((m) => Boolean(m));

      const markers = _markers.map((m) => {
        const { lat, lng, image, info } = m; //비구조 할당

        const options = {
          position: new kakao.maps.LatLng(lat, lng), //위도, 경도 넣은 객체 생성
        };

        //마커 이미지 처리 S
        const mi = image ? image : markerImage;
        if (mi) {
          const mIcon = new kakao.maps.MarkerImage(
            mi,
            new kakao.maps.Size(64, 69), //크기
            { offset: new kakao.maps.Point(27, 69) }, //옵션
          );
          options.image = mIcon;
        }
        //마커 이미지 E
        const _marker = new kakao.maps.Marker(options);

        //인포 윈도우 처리 S
        if (info?.content?.trim()) {
          //공백을 제거했을 때도 문자가 있을 때 출력
          const { content, clickable, removable } = info;

          const infoWindow = new kakao.maps.InfoWindow({
            content,
            removable: Boolean(removable),
          });

          if (clickable) {
            kakao.maps.event.addListener(_marker, 'click', function () {
              if (_marker.isInfoWindowOpen) {
                //미노출
                infoWindow.close();
                _marker.isInfoWindowOpen = false;
              } else {
                //노출
                infoWindow.open(map, _marker);
                _marker.isInfoWindowOpen = true;
              }
            });
          } else {
            infoWindow.open(map, _marker);
          }
        }
        //인포 윈도우 처리 E

        _marker.setMap(map);

        return _marker;
      });
    }

    //마커 출력 E
  }, [mapRef, zoom, markerImage, marker, _center]);
  //center는 외부 값이기 때문에 필요함

  //너비, 높이 직접 설정
  return <MapArea ref={mapRef} width={width} height={height} />;
};

export default React.memo(KakaoMap);