import {styled} from "@mui/material/styles";
import {Box} from "@mui/system";
import { Colors } from "../basetheme/theme";
import { Typography } from "@mui/material";
import "@fontsource/montserrat";
import '@fontsource/poppins';
export const AboutBodyContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    height: "auto",
    border: `1px solid ${Colors.aboutPrimaryColor}`,
    alignItems: "center",
    margin: "4% 10%",
    borderRadius: "13% 31% 10% 3% / 4% 1% 31% 11%",
    fontFamily: "'Montserrat', 'sans-serif'",
    color: Colors.aboutPrimaryTextColor,
    [theme.breakpoints.down("md")]: {
      margin: "4% 1%", 
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
      width: "21%",
      height: "19vw",
      margin: "1% auto",
    },
  }));
  
  export const AboutTitle = styled(Typography)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 1.5,
    fontFamily: "'Courier Prime', sans-serif",
    fontWeight: "600",
    fontSize: "41px",
    marginBottom: "15px",
    color: `${Colors.aboutPrimaryColor}`,
    [theme.breakpoints.down("md")]: {
      marginBottom: "5px",
      fontSize: "2em",
      
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
      letterSpacing: 1.20,
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
  

  export const AboutSkillsContainer = styled(Box)(({theme}) => ({
      display: "flex",
      alignItems: "center",
      marginTop: "2em",
      flexWrap: "wrap",
      [theme.breakpoints.down("md")]:{
        flexWrap: "wrap",
      },
      [theme.breakpoints.down("sm")]:{
        flexWrap: "wrap",
      }
  }));

  export const SkillsButton = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '5em',
    height: '2.7em',
    fontSize: '0.7em',
    textAlign: 'center',
    border: `none`,
    boxShadow: `3px 4px 2px ${Colors.backgroundDarkGray}`, 
    color: Colors.premiumDark,
    background: Colors.backgroundLightGray,
    margin: '0.6em',
    padding: '5px',
    fontWeight: '600',
    borderRadius: '15%',
    cursor: "pointer",
    transition: 'transform 0.3s ease, box-shadow 0.2s ease', 
  
    '&:hover': {
      transform: 'scale(1.1)', 
      boxShadow: `5px 4px 6px ${Colors.backgroundDarkGray}`, 
    },
  
    [theme.breakpoints.down('md')]: {
      width: '4em',
      height: '2.5em',
      marginLeft: '0.4%',
      fontSize: '0.9em',
    },
    [theme.breakpoints.down('sm')]: {
      width: '3.2em',
      height: '2.7em',
      marginLeft: '0.4%',
      fontSize: '0.6em',
    },
  }));