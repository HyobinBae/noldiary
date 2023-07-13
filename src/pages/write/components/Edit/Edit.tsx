import React from "react";
import styled from "styled-components";
import EditHeader from "./EditHeader";
import EditMain from "./EditMain";
import ColorButton from "../../../../components/ColorButton";
import { useAppDispatch, useAppSelector } from "../../../../services/store";
import { setIsModalOpen } from "../../services/write.slice";
import EditSaveModal from "./EditSaveModal";

const Edit = () => {
  const dispatch = useAppDispatch();

  const publishHandler = () => {
    dispatch(setIsModalOpen(true));
  };

  const isModalOpen = useAppSelector((state) => state.write.isModalOpen);

  return (
    <>
      {isModalOpen === true ? <EditSaveModal /> : null}
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
          <EditHeader />
          <EditMain />
        </Box>
      </Container>
    </>
  );
};

export default Edit;

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
`;

const Box = styled.div`
  width: 760px;
`;
