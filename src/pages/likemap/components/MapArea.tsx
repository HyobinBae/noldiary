import React, { useEffect } from "react";
import styled from "styled-components";
import { useGetLikeListQuery } from "../../../services/api";

declare global {
  interface Window {
    kakao: any;
  }
}

const MapArea = () => {
  const { kakao } = window;
  const { data: likeList } = useGetLikeListQuery();

  if (likeList) {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(likeList[0].mapy, likeList[0].mapx),
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
      console.log(markerImage);

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
          borderRadius: "50px",
        },
      ],
    });
  }

  return (
    <Container>
      <MapWrapper
        id="map"
        style={{ width: "100%", height: "88vh" }}
      ></MapWrapper>
    </Container>
  );
};

export default MapArea;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 100%;
`;

const MapWrapper = styled.div``;
