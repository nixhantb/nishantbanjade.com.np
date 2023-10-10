import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Colors } from "../basetheme/theme";

export const ExperienceContainer = styled(Box)(({ theme }) => ({
  height: "auto",
  marginBottom: "10%",
  borderRadius: "5%",
  width: "70%",
  margin: "auto",
  padding: "5%",
  fontFamily: "'Montserrat', 'sans-serif'",
  background: Colors.backgroundLightGray,
  [theme.breakpoints.down("md")]: {
    width: "auto",
  },
}));

export const ExperienceItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const ExperienceTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  lineHeight: 1.5,
  letterSpacing: 2.5,
  fontFamily: "'Courier Prime', sans-serif",
  fontWeight: "600",
  fontSize: "41px",
  marginBottom: "3%",
  color: Colors.workPrimaryTitle,
  [theme.breakpoints.down("md")]: {
    marginBottom: "5px",
    fontSize: "2em",
  },

  [theme.breakpoints.down("sm")]: {
    marginBottom: "3px",
    fontSize: "1.7em",
  },
}));
