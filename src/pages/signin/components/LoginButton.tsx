import React from "react";
import styled from "styled-components";

interface Props {
  src: string;
  text: string;
  color: string;
}

const LoginButton = ({ src, text, color }: Props) => {
  return (
    <Button style={{ backgroundColor: color }}>
      <IconBox>
        <img src={src} alt="login icon" width="20px" />
      </IconBox>
      <TextBox>
        <Text>{text}</Text>
      </TextBox>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  border: none;
  border-radius: 3px;

  width: 280px;
  height: 45px;

  margin-bottom: 20px;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 0.5px solid white;
  padding-right: 5px;

  width: 40px;
  height: 100%;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 250px;
  height: 100%;
`;

const Text = styled.div``;

export default LoginButton;
