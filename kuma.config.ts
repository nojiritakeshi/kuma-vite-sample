import { createTheme } from "@kuma-ui/core";
// import { createTheme } from "../kuma-ui/packages/core/src/theme";

const theme = createTheme({
  colors: {
    red: {
      100: "#102010",
    },
    primary: "blue", // 藍色
    blue: "blue",
    secondary: "#102010", // 藍色
    test: "red",
    sub: "#776644",
  },
  breakpoints: {
    sm: "500px",
    md: "700px",
  },
  fonts: {
    heading: "Georgia, serif",
    body: "Noto Sans TC, sans-serif",
  },
  fontSizes: {
    sm: "22px",
    md: "24px",
  },
  lineHeights: {
    sm: "10px",
  },
  spacings: {
    sm: "300px",
    1: "0.25rem",
    4: "1rem",
  },
  zIndices: {
    sm: "100",
  },
  fontWeights: {
    sm: "300",
    lm: 500,
  },
  components: {
    Button: {
      baseStyle: {
        bg: "gray", // bg is short for background
        p: "50px", // p is short for padding
        m: "150px", // m is short for margin
        color: "white",
      },
    },
  },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
