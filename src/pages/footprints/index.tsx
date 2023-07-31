import React from "react";
import styled from "styled-components";

const Footprints = () => {
  return <Title>내 발자취</Title>;
};

const Title = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.mainBlue};
`;

export default Footprints;
