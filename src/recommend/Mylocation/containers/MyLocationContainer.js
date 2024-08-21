/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { apiList } from '../apis/apiInfo';
import Loading from '../../../commons/components/Loading';
import KakaoMap from '../../../map/KakaoMap';

const ViewContainer = () => {
  const [search, setSearch] = useState({
    sido: '',
    sigungu: '',
    limit: 100000,
  });
  const [center, setCenter] = useState([]); // 지도 중심 좌표(현재 위치의 위도, 경도) - 사용자의 현재 위치 기반으로 설정
  const [locations, setLocations] = useState([]); // 검색된 위치들의 위도, 경도를 저장하는 배열 -> 마커 표기할 위도, 경도 정보

  /* 현재 위치의 시도, 시군구 찾기 S */
  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();
    //Geocoder - 특정 좌표를 시도, 시군구 등의 행정구역 정보로 변환하는 작업

    navigator.geolocation.getCurrentPosition((pos) => {
      /* 현재 위치 설정
      const { latitude, longitude } = pos.coords; 
      setCenter({ lat: latitude, lng: longitude }); */

      const { latitude, longitude } = {
        lat: 37.938384140783754,
        lng: 126.95154477764298,
      };
      setCenter({ lat: 37.938384140783754, lng: 126.95154477764298 });

      geocoder.coord2RegionCode(longitude, latitude, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          for (const r of result) {
            if (r.region_type === 'H') {
              setSearch((search) => ({
                ...search,
                sido: r.region_1depth_name,
                sigungu: r.region_2depth_name,
                //sido: r.region_1depth_name, // 현재 시도로 데이터 검색
                sido: '경기도',
                //sigungu: r.region_2depth_name, // 현재 시군구로 데이터 검색
                sigungu: '양평군',
              }));
              break;
            }
          }
        }
      });
    });
  }, [setSearch, setCenter]);
  /* 현재 위치의 시도, 시군구 찾기 E */

  useEffect(() => {
    (async () => {
      try {
        const res = await apiList(search);

        /* 마커 표기 좌표 가공 처리 S */
        if (!res?.items || res?.items?.length === 0) {
          return;
        }

        const _locations = res.items
          .filter((d) => d.latitude && d.longitude)
          .map((d) => ({
            lat: d.latitude,
            lng: d.longitude,
          }));

        setLocations(_locations);
        /* 마커 표기 좌표 가공 처리 E */
      } catch (err) {
        console.err(err);
      }
    })();
  }, [search]);

  if (center?.length === 0 || locations?.length === 0) {
    return <Loading />;
  }

  return <KakaoMap center={center} marker={locations} zoom={6} />;
};

export default React.memo(ViewContainer);
