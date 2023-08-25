import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../../../../services/store";
import { setThumbnailImage } from "../../../write/services/write.slice";

const DiaryDetailHeader = ({ props }) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const editButtonHandler = () => {
    dispatch(setThumbnailImage(props.thumbnailImage));
    navigate(`/edit/${id}`);
  };

  return (
    <HeaderContainer>
      <TitleBox>{props?.title}</TitleBox>
      <InfoContainer>
        <Container>
          <Wrapper>
            <DetailContainer>
              <Detail>{props?.departure}</Detail>
            </DetailContainer>
            <TinyDetail>-</TinyDetail>
            <DetailContainer>
              <Detail>{props?.destination}</Detail>
            </DetailContainer>
          </Wrapper>
          <Wrapper>
            <DetailContainer>
              <DetailContainer>
                <DateDetail>{props?.departureDate}</DateDetail>
                <TinyDetail>~</TinyDetail>
                <DateDetail>{props?.arrivalDate}</DateDetail>
              </DetailContainer>
            </DetailContainer>
          </Wrapper>
        </Container>
        <Container>
          <EditButton onClick={editButtonHandler}>수정하기</EditButton>
        </Container>
      </InfoContainer>
    </HeaderContainer>
  );
};

export default DiaryDetailHeader;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100vw;
  }
`;

const TitleBox = styled.div`
  display: flex;

  justify-content: flex-start;
  align-items: center;

  width: 50%;
  height: 55px;

  margin-bottom: 20px;
  border: none;
  outline: none;
  font-size: 40px;

  ::placeholder {
    display: flex;
    align-items: center;

    padding: 10px 0px;
    font-size: 30px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    height: 46px;
    margin-bottom: 10px;
    font-size: 28px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0px;

  width: 50%;
  color: #bbbbbb;

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    height: 46px;
    margin-bottom: 10px;
    font-size: 28px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 5px;
  border: none;
  outline: none;

  height: 20px;

  font-size: 14px;
`;

const DateDetail = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 5px;
  border: none;
  outline: none;

  height: 20px;

  font-size: 14px;
`;

const TinyDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px 5px;

  width: 15px;
  height: 20px;

  border: none;
`;

const EditButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 3px 5px;

  cursor: pointer;
  color: #2192ff;
  font-size: 14px;
`;
