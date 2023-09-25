import {
  ContainerDiv,
  DotsInsideContainer,
  GreenDot,
  NavInsideContainer,
  OrangeDot,
  TermContainer,
  TextInsideContainer,
  YellowDot,
} from "../../assets/styles/terminal/terminalstyle";
import { IconButton } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useMediaQuery, useTheme } from "@mui/material";

function Terminal() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <ContainerDiv>
        <TermContainer>
          <NavInsideContainer>
            <DotsInsideContainer>
              <OrangeDot></OrangeDot>
              <YellowDot></YellowDot>
              <GreenDot></GreenDot>
            </DotsInsideContainer>
            <TextInsideContainer>Nix-term</TextInsideContainer>
            <IconButton>
            <Brightness4Icon
                sx={{ fontSize: isSmallScreen ? "0.7em" : "1em" }}
              />
            </IconButton>
          </NavInsideContainer>
        </TermContainer>
      </ContainerDiv>
    </>
  );
}

export default Terminal;
