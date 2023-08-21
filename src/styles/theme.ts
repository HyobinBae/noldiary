import { DefaultTheme } from "styled-components";

const colors = {
  mainBlue: "#2192FF",
  subBlue: "#50aaff",
  mainGrey: "#8F8F8F",
  white: "#FFFFFF",
  black: "#000000",
  kakaoYellow: "#FEE500",
  naverGreen: "#03C75A",
};

const fontSize = {
  title: 20,
  text: 14,
};

const deviceSizes = {
  mobile: "500px",
  tablet: "768px",
  pc: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.pc})`,
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;
export type DeviceTypes = typeof device;

const theme: DefaultTheme = {
  colors,
  fontSize,
  device,
};

export default theme;
