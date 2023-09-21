// Desktop view
import { ListItemButton, ListItemText } from "@mui/material";
import {
  ListNavItemContainer,
  NavBarContainer,
  NavBarHeaderTitle,
  ListItemButtonStyle,
  PrimaryHeaderButtonStyle,
  textStyleListItemText,
  primaryTypographyStyle,
  primaryTypographyHeaderStyle,
} from "../../assets/styles/UserProfileNav/UserProfileNavStyles";

import UserInformationDataForNavBar from "../../assets/config/developer_data/customizedev";
import { FC } from "react";

const UserProfileNavDesktopView: FC = () => {
  const {
    developer_username,
    navbar_home,
    navbar_contact,
    navbar_about,
    navbar_terminal,
  } = UserInformationDataForNavBar;

  return (
    <NavBarContainer>
      <NavBarHeaderTitle>
        <ListItemButton sx={PrimaryHeaderButtonStyle}>
          <ListItemText
            primary={developer_username}
            primaryTypographyProps={primaryTypographyHeaderStyle}
            sx={textStyleListItemText}
          ></ListItemText>
        </ListItemButton>
      </NavBarHeaderTitle>

      <ListNavItemContainer types="row">
        <ListItemButton sx={ListItemButtonStyle}>
          <ListItemText
            primary={navbar_home}
            primaryTypographyProps={primaryTypographyStyle}
            sx={textStyleListItemText}
          ></ListItemText>
        </ListItemButton>

        <ListItemButton sx={ListItemButtonStyle}>
          <ListItemText
            primary={navbar_about}
            primaryTypographyProps={primaryTypographyStyle}
            sx={textStyleListItemText}
          ></ListItemText>
        </ListItemButton>

        <ListItemButton sx={ListItemButtonStyle}>
          <ListItemText
            primary={navbar_contact}
            primaryTypographyProps={primaryTypographyStyle}
            sx={textStyleListItemText}
          ></ListItemText>
        </ListItemButton>

        <ListItemButton sx={ListItemButtonStyle}>
          <ListItemText
            primary={navbar_terminal}
            primaryTypographyProps={primaryTypographyStyle}
            sx={textStyleListItemText}
          ></ListItemText>
        </ListItemButton>
      </ListNavItemContainer>
    </NavBarContainer>
  );
};

export default UserProfileNavDesktopView;
