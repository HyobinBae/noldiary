import { DefaultTheme } from "styled-components";

const colors = {
  mainBlue: "#2192FF",
  subBlue: "50aaff",
  mainGrey: "8F8F8F",
  white: "#FFFFFF",
  black: "#000000",
  kakaoYellow: "#FEE500",
  naverGreen: "#03C75A",
};

const fontSize = {
  title: 20,
  text: 14,
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
