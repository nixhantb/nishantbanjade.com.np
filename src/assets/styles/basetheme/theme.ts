import { createTheme, Theme } from "@mui/material";

export const Colors: Record<string, string> = {
  primary: "#395a65",
  backgroundLightGray: "#fdfdfd",
  backgroundLightBlack: "#253b43",
  accentOrange: "#df7261",
  backgroundDarkGray: "#d8d9da",
  textShaft: "#cfa29d",
  textBlack: "#000000",
  plumPlate: "linear-gradient(to right, #667eea, #764ba2)",
  cloudyKnoxville: "linear-gradient(to right,#fdfbfb, #ebedee)",
  premiumDark: "linear-gradient(to right, #434343, #000000)",
  royal: "linear-gradient(#1b2e34,#3c5b63)",
  terminal: "#20C20E",
  almost: "#d2e7ff",
  textGray: "#343d46",
};

const baseTheme: Theme = createTheme({
  palette: {
    primary: {
      main: Colors.textShaft,
    },
    secondary: {
      main: Colors.accentOrange,
    },
    background: {
      default: Colors.backgroundLightGray,
      paper: Colors.backgroundLightBlack,
    },
    text: {
      primary: Colors.textBlack,
      secondary: Colors.textShaft,
    },
  },
});

export default baseTheme;
