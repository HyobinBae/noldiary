import React from "react";
import styled from "styled-components";
import { FaTrain } from "react-icons/fa";

const TicketTitle = () => {
  return (
    <TitleBox>
      <FaTrain size={30} color="white" />
      <Title>경주여행</Title>
    </TitleBox>
  );
};

export default TicketTitle;

const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 600px;
  height: 50px;
  padding-left: 20px;
  background-color: #2192ff;

  border-radius: 15px 15px 0 0;
`;
const Title = styled.div`
  padding-left: 20px;
  font-size: 20px;
  color: #ffffff;
`;
