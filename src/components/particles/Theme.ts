import { BREAKPOINTS } from "../../utils/contants";

const fontSize = {
  sm: "1rem",
  md: "1.1rem",
  lg: "1.414rem",
  xl: "1.999rem",
  "2xl": "2.827rem",
  "3xl": "3.998rem",
  "4xl": "7rem",
};

const fonts = {
  primary: "'Work Sans', sans-serif",
  secondary: "'Montserrat', sans-serif",
  alt: "'Libre Baskerville', serif",
};

const typography = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const color = {
  primary: "#414A68",
  secondary: "#B49A85",
  tertiary: "#FF5851",
  gold: "#F3C130",
  black: "#1C1B20",
  mono: "#606060",
};

const breakpoints = { ...BREAKPOINTS };

export default {
  fontSize,
  typography,
  fonts,
  color,
  breakpoints,
};
