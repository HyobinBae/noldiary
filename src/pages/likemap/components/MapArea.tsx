import React, { useEffect } from "react";
import styled from "styled-components";
import { useGetLikeListQuery } from "../../../services/api";
import { useAppSelector } from "../../../services/store";

declare global {
  interface Window {
    kakao: any;
  }
}

const MapArea = () => {
  const { kakao } = window;
  const { data: likeList } = useGetLikeListQuery();
  const selectedMapX = useAppSelector((state) => state.likemap.mapXY.mapx);
  const selectedMapY = useAppSelector((state) => state.likemap.mapXY.mapy);

  useEffect(() => {
    if (likeList) {
      const container = document.getElementById("map");

      let centerLatLng;
      if (selectedMapX && selectedMapY) {
        centerLatLng = new kakao.maps.LatLng(selectedMapY, selectedMapX);
      } else {
        centerLatLng = new kakao.maps.LatLng(
          likeList[0].mapy,
          likeList[0].mapx
        );
      }

      const options = {
        center: centerLatLng,
        level: 3,
      };

      const map = new kakao.maps.Map(container, options);

      const markers = likeList.map((item) => {
        const imageSrc = item.firstimage;
        const imageSize = new kakao.maps.Size(70, 70);
        const imageOption = {
          offset: new kakao.maps.Point(35, 60),
          shape: "rect",
          coords: "8,8,62,62",
        };

        const markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        return new kakao.maps.Marker({
          position: new kakao.maps.LatLng(item.mapy, item.mapx),
          map: map,
          image: markerImage,
          title: item.title,
        });
      });

      const clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        markers: markers,
        gridSize: 35,
        averageCenter: true,
        minLevel: 6,
        disableClickZoom: true,
        styles: [
          {
            width: "53px",
            height: "52px",
            color: "#2192ff",
            textAlign: "center",
            lineHeight: "54px",
          },
        ],
      });
    }
  }, [likeList, kakao, selectedMapX, selectedMapY]);

  return (
    <Container>
      <MapWrapper
        id="map"
        style={{ width: "100%", height: "100%" }}
      ></MapWrapper>
    </Container>
  );
};

export default MapArea;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: calc(100vw - 414px);
  height: calc(100vh - 107px);
`;

const MapWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
