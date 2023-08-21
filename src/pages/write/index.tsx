import React from "react";
import styled from "styled-components";
import WriteHeader from "./components/Write/WriteHeader";
import WriteMain from "./components/Write/WriteMain";
import SaveModal from "./components/Write/SaveModal";
import ColorButton from "../../components/ColorButton";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { setIsModalOpen } from "./services/write.slice";

const Write = () => {
  const dispatch = useAppDispatch();

  const publishHandler = () => {
    dispatch(setIsModalOpen(true));
  };

  const isModalOpen = useAppSelector((state) => state.write.isModalOpen);

  return (
    <>
      {isModalOpen === true ? <SaveModal /> : null}
      <Container>
        <Header>
          {/* <BorderButton
            onClick={}
            width={"56px"}
            height={"32px"}
            text={"저장"}
          /> */}
          <ColorButton
            onClick={publishHandler}
            width={"56px"}
            height={"32px"}
            text={"발행"}
          />
        </Header>
        <Box>
          <WriteHeader />
          <WriteMain />
        </Box>
      </Container>
    </>
  );
};

export default Write;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0px 30px;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;

  width: 760px;
  margin: 25px 0;

  @media ${({ theme }) => theme.device.mobile} {
    width: 90vw;
  }
`;

const Box = styled.div`
  width: 760px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 90vw;
  }
`;
