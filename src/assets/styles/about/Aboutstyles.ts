import {styled} from "@mui/material/styles";
import {Box} from "@mui/system";
import { Colors } from "../basetheme/theme";
import { Typography } from "@mui/material";
import "@fontsource/montserrat";
import '@fontsource/poppins';
export const AboutBodyContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    height: "54vh",
    border: `1px solid rgb(154, 210, 178)`,
    alignItems: "center",
    margin: "5% 10%",
    borderRadius: "13% 31% 10% 3% / 4% 1% 31% 11%",
    fontFamily: "'Montserrat', 'sans-serif'",
    color: Colors.aboutPrimaryTextColor,
    [theme.breakpoints.down("md")]: {
      margin: "4% 5%", 
      borderRadius: "5%",
      flexDirection: "column",
      alignItems: "center",
      height: "auto", 
      padding: "20px", 
    },
  }));
  
  export const AboutBodyImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "17%",
    height: "13vw",
    borderRadius: "50%",
    border: `2px solid ${Colors.aboutPrimaryColor}`,
    margin: "1% 4%",
    [theme.breakpoints.down("md")]: {
      width: "20%",
      height: "16vw",
      margin: "1% auto",
    },
  }));
  
  export const AboutTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    fontFamily: "'Courier Prime', sans-serif",
    fontWeight: "600",
    fontSize: "41px",
    marginBottom: "15px",
    color: `${Colors.aboutPrimaryColor}`,
    [theme.breakpoints.down("md")]: {
      marginBottom: "5px",
      fontSize: "22px",
      textAlign: "center",
    },
  }));
  
  export const AboutDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    letterSpacing: 1.5,
    fontSize: "1em",
    fontFamily: "'poppins', sans-serif",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1.25,
      letterSpacing: 1.25,
      fontSize: "0.8em",
    },
  }));
  
  export const AboutContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "900px",
    padding: "30px",
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1.15,
      letterSpacing: 1.15,
      width: "100%",
      padding: "20px",
    },
  }));
  