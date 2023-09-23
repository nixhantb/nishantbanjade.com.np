import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../basetheme/theme";
import { Typography } from "@mui/material";
import "@fontsource/courier-prime";

export const HeroBodyContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10px",
  background: Colors.backgroundLightGray,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const HeroBodyImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "42em",
  height: "45vh",
  margin: "1% auto",
  [theme.breakpoints.down("lg")]: {
    width: "30em",
    margin: "4% auto",
  },
  [theme.breakpoints.down("md")]: {
    width: "80%",
    height: "45vw",
    margin: "2% auto",
  },
}));

export const HeroBodyDescriptionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "38em",
  height: "24vh",
  margin: "2% auto 2%",
  borderRadius: "5%",
  color: Colors.backgroundLightGray,
  background: Colors.royal,
  [theme.breakpoints.down("lg")]: {
    width: "35em",
    height: "28vh",
    margin: "4% auto",
  },
  [theme.breakpoints.down("md")]: {
    width: "80%",
    height: "28vw",
    margin: "2% auto",
  },
  transition: "0.3s",
  "&:hover": {
    borderRadius: "13% 31% 10% 3% / 4% 1% 31% 11%",
    boxShadow: `2px 2px 3px ${Colors.backgroundDarkGray}`,
  },
}));

export const HeroTypeWriterContainer = styled(Typography)(({ theme }) => ({
  fontFamily: "'Courier Prime', sans-serif",
  fontSize: "1.1em",
  fontWeight: "600",
  padding: "2.5em",
  lineHeight: 1.6,
  letterSpacing: 1.25,
  
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.25,
    letterSpacing: 1.20,
    fontSize: "2vw",
    padding: "4em",
  },
  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.25,
    letterSpacing: 1.15,
    fontSize: "2.5vw",
    padding: "3em",
  },
}));

