// import { createTheme } from "@kuma-ui/core";
import { createTheme } from "../kuma-ui/packages/core/src/theme";

const theme = createTheme({
  colors: {
    red: {
      100: "red",
    },
    primary: "#DEDEDE",
    blue: "blue",
    secondary: "#102010", // 藍色
  },
  breakpoints: {
    sm: "500px",
    md: "700px",
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
