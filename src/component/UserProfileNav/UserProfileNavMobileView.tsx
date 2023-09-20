import { FC } from "react";
import {
  NavBarContainer,
  NavBarHeaderTitle,
  PrimaryHeaderButtonStyle,
  primaryTypographyHeaderMobileStyle,
  textStyleListItemText,
} from "../../assets/styles/UserProfileNav/UserProfileNavStyles";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import UserInformationDataForNavBar from "../../assets/config/developer_data/customizedev";
import { ListItemButton, ListItemText } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";

const UserProfileNavMobileView: FC = () => {
  const { developer_username } = UserInformationDataForNavBar;
  return (
    <NavBarContainer>
      <IconButton aria-label="menu-icon">
        <MenuIcon />
      </IconButton>

      <NavBarHeaderTitle>
        <ListItemButton sx={PrimaryHeaderButtonStyle}>
          <ListItemText
            primary={developer_username}
            primaryTypographyProps={primaryTypographyHeaderMobileStyle}
            sx={textStyleListItemText}
          ></ListItemText>
        </ListItemButton>
      </NavBarHeaderTitle>

      <IconButton aria-label="terminal-icon">
        <TerminalIcon />
      </IconButton>
    </NavBarContainer>
  );
};

export default UserProfileNavMobileView;
