import React from "react";
import styled from "styled-components";
import { FaTrain } from "react-icons/fa";

const TicketTitle = ({ title }) => {
  return (
    <TitleBox>
      <FaTrain size={30} color="white" />
      <Title>{title}</Title>
    </TitleBox>
  );
};

export default TicketTitle;

const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 50px;
  padding-left: 20px;
  background-color: #2192ff;

  border-radius: 8px 8px 0 0;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

const Title = styled.div`
  padding-left: 10px;
  font-size: 20px;
  color: #ffffff;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 18px;
  }
`;
