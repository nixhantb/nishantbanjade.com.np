
import { Typography } from "@mui/material";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/system";
import { Colors } from "../basetheme/theme";
export const ContactContainer =  styled(Box)(() => ({
   width: "auto"
}))

export const ContactIconsContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:  Colors.footerBackGroundColor,
}));

export const ContentTitle = styled(Typography)(({theme}) => ({
    display: "flex",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: 1.5,
  letterSpacing: 2.5,
  fontFamily: "'Courier Prime', sans-serif",
  fontWeight: "600",
  fontSize: "35px",
  marginBottom: "1%",
  color: "white",
  [theme.breakpoints.down("md")]: {
    marginBottom: "5px",
    fontSize: "1.3em",
  },

  [theme.breakpoints.down("sm")]: {
    marginBottom: "3px",
    fontSize: "1.3em",
  },
}))