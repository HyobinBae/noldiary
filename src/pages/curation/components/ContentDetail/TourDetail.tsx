import React from "react";
import styled from "styled-components";
import { useGetContentDetailQuery } from "../../../../services/api";
import { useAppSelector } from "../../../../services/store";
import { useParams } from "react-router-dom";

const TourDetail = () => {
  const { id } = useParams();
  const contentID = Number(id);

  const contentTypeID = useAppSelector((state) => state.curation.contentTypeID);

  const { data: contentDetail } = useGetContentDetailQuery({
    contentID,
    contentTypeID,
  });

  return (
    <Container>
      <ImageWrapper>
        <ImageBox src={contentDetail?.common.firstimage} />
      </ImageWrapper>
      <Text>tourDetail</Text>
    </Container>
  );
};

export default TourDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  width: 60vw;
  height: 30vw;
`;
const ImageBox = styled.img`
  width: 100%;
  height: 100%;
`;

const Text = styled.div``;
