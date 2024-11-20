import {
  NavInsideContainer,
  DotsInsideContainer,
  OrangeDot,
  YellowDot,
  GreenDot,
  TextInsideContainer,
} from "../../assets/styles/terminal/terminalstyle";
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useMediaQuery, useTheme } from "@mui/material";
export default function TermNav() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <NavInsideContainer>
      <DotsInsideContainer>
        <OrangeDot />
        <YellowDot />
        <GreenDot />
      </DotsInsideContainer>
      {/* Copyright :D Nishant Banjade*/}
      <TextInsideContainer>Nix-term</TextInsideContainer>
     
        <KeyboardIcon sx={{ fontSize: isSmallScreen ? "0.7em" : "1em" }} />
   
    </NavInsideContainer>
  );
}
