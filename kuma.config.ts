import { createTheme } from "@kuma-ui/core";
// import { createTheme } from "../kuma-ui/packages/core/src/theme";

const theme = createTheme({
  colors: {
    red: {
      100: "red",
    },
    blue: "blue",
  },
  breakpoints: {
    sm: "400px",
    md: "700px",
  },
  components: {
    Button: {
      baseStyle: {
        bg: "black", // bg is short for background
        p: "10px", // p is short for padding
        m: 10,
      },
    },
  },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
