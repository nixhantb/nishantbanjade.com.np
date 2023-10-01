import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../basetheme/theme";
import { Typography } from "@mui/material";

export const ContainerDiv = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1%",
  marginBottom: "10%",
  height: "50vh",
}));

// Terminal container
export const TermContainer = styled(Box)(({ theme }) => ({
  width: "80%",
  height: "45vh",
  background: Colors.terminalBackgroundColor,
  borderRadius: "2%",
  overflowY: "auto",
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    width: "0", // Hide the vertical scrollbar
  },
  [theme.breakpoints.down("sm")]: {
    height: "40vh",
    width: "100%",
  },
}));

// Navbar container
export const NavInsideContainer = styled(Box)(({ theme }) => ({
  position: "sticky",  // Add this property
  top: 0, 
  height: "2.3em",
  background: Colors.navBackgroundColor,
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignItems: "center",
  padding: "0 1em",
  [theme.breakpoints.down("sm")]: {
    padding: "0 0.5em",
    height: "1.8em",
  },
}));

export const DotsInsideContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
}));

export const TextInsideContainer = styled(Typography)(({ theme }) => ({
  fontFamily: "'Courier Prime', sans-serif",
  fontSize: "1em",
  fontWeight: "600",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7em",
  },
}));

export const Dot = styled(Box)(({ theme }) => ({
  content: '""',
  width: "1em",
  height: "1em",
  borderRadius: "50%",
  marginRight: "8px",
  [theme.breakpoints.down("sm")]: {
    width: "0.7em",
    height: "0.7em",
    marginRight: "5px",
  },
}));

export const OrangeDot = styled(Dot)(() => ({
  backgroundColor: Colors.terminalOrangeDot,
}));

export const YellowDot = styled(Dot)(() => ({
  backgroundColor: Colors.terminalYellowDot,
}));

export const GreenDot = styled(Dot)(() => ({
  backgroundColor: Colors.terminalGreenDot,
}));

export const TerminalWelcomeMessages = styled(Typography)(({theme}) => ({
  fontFamily: "'Courier Prime', sans-serif",
  fontSize: "1em",
  fontWeight: "550",
  color: Colors.textBlack,
  margin: "0.5em 1.4em",
  [theme.breakpoints.down("sm")]:{
    fontSize: "0.8em"
  }

}))
export const TerminalPrompt = styled(Box)(() => ({
    color: "rgb(169, 23, 168)",
    marginLeft: "1.4em"
}));

export const TerminalUserName = styled(Typography)(({theme}) => ({
   fontSize: "1em",
   fontWeight: "600",
   marginTop: "1em",
   marginBottom: "0.4em",
   fontFamily: "'Courier Prime', sans-serif",
   paddingBottom: "4px",
   [theme.breakpoints.down("sm")]: {
    fontSize: "0.8em"
   }
}));

export const TerminalOutput = styled(Typography)(({theme})=>({
  fontSize: "0.9em",
   fontWeight: "500",
   marginLeft: "1.6em",
   fontFamily: "'Courier Prime', sans-serif",
   [theme.breakpoints.down("sm")]: {
    fontSize: "0.8em",
    marginLeft: "0.9em"
   }
}));
