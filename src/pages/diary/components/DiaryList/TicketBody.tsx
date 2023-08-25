import React from "react";
import styled from "styled-components";
import { HiOutlineShare } from "react-icons/hi";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const TicketBody = ({
  departure,
  destination,
  departureDate,
  arrivalDate,
  contents,
  bookmark,
}) => {
  return (
    <InfoContainer>
      <Container>
        <Box>
          <InfoTitle>From</InfoTitle>
          <InfoContent>{departure}</InfoContent>
        </Box>
        <Box>
          <InfoTitle>To</InfoTitle>
          <InfoContent>{destination}</InfoContent>
        </Box>
        <Box>
          <InfoTitle>Departure</InfoTitle>
          <InfoContent>{departureDate}</InfoContent>
        </Box>
        <Box>
          <InfoTitle>Destination</InfoTitle>
          <InfoContent>{arrivalDate}</InfoContent>
        </Box>
      </Container>
      <Container>
        <Box>
          <InfoTitle>Description</InfoTitle>
          <Content>
            <Content dangerouslySetInnerHTML={{ __html: contents }} />
          </Content>
        </Box>
        <IconBox>
          <HiOutlineShare size={25} />
          {bookmark === false ? (
            <FaRegBookmark size={25} />
          ) : (
            <FaBookmark size={25} />
          )}
        </IconBox>
      </Container>
    </InfoContainer>
  );
};

export default TicketBody;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 280px;

  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  border-right-width: 2px;
  border-right-style: none;
  border-top: none;
  border-radius: 0px 0px 8px 8px;

  padding: 20px 20px;

  @media ${({ theme }) => theme.device.mobile} {
    border: 1px solid #e8e8e8;
    height: 260px;
    border-radius: 0 0 8px 8px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: calc(100% / 2);
  height: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-bottom: 14px;
  width: 100%;
`;

const InfoTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 150px;
  margin-bottom: 5px;

  color: #8f8f8f;
  font-size: 12px;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10px;
  }
`;

const InfoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  font-size: 18px;

  .p {
    width: 100px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 14px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  font-size: 18px;
  line-height: 1.5;

  width: 100%;
  height: 160px;
  margin-bottom: 10px;

  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 14px;
    height: 140px;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 10px;
`;
