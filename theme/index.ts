import { createTheme } from "@mui/material";

const fontFamily = [
  "TWKLausanne",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

let theme = createTheme({
  breakpoints: { values: { xs: 375, sm: 768, md: 1024, lg: 1440, xl: 1920 } },
});

theme = {
  ...theme,
  typography: {
    ...theme.typography,
    h2: {
      fontFamily,
      color: "#242424",
      [theme.breakpoints.down("sm")]: { fontSize: 42 }, // mobile
      [theme.breakpoints.up("sm")]: { fontSize: 72 }, // tablet
      [theme.breakpoints.up("md")]: { fontSize: 110 }, // desktop
      fontWeight: 300,
      lineHeight: "1em",
    },
    h3: {
      color: "#242424",
      fontFamily,
      [theme.breakpoints.down("sm")]: { fontSize: 36 }, // mobile
      [theme.breakpoints.up("sm")]: { fontSize: 52 }, // tablet
      [theme.breakpoints.up("md")]: { fontSize: 68 }, // desktop
      fontWeight: 300,
      lineHeight: "1em",
    },
    h4: {
      color: "#242424",
      fontFamily,
      [theme.breakpoints.down("sm")]: { fontSize: 22 }, // mobile
      [theme.breakpoints.up("sm")]: { fontSize: 32 }, // tablet
      [theme.breakpoints.up("md")]: { fontSize: 40 }, // desktop
      fontWeight: 300,
      lineHeight: "1em",
    },
    body1: {
      color: "#242424",
      fontFamily,
      [theme.breakpoints.down("sm")]: { fontSize: 18 }, // mobile
      [theme.breakpoints.up("sm")]: { fontSize: 22 }, // tablet
      [theme.breakpoints.up("md")]: { fontSize: 24 }, // desktop
      fontWeight: 300,
      lineHeight: "1em",
    },
    body2: {
      color: "#242424",
      fontFamily,
      [theme.breakpoints.down("sm")]: { fontSize: 16 }, // mobile
      [theme.breakpoints.up("sm")]: { fontSize: 18 }, // tablet - TODO: check if this is correct
      [theme.breakpoints.up("md")]: { fontSize: 16 }, // desktop
      fontWeight: 300,
      lineHeight: "1em",
    },
    caption: {
      fontFamily,
      fontSize: 14,
      lineHeight: 1.285,
    },
  },
};
export default theme;
