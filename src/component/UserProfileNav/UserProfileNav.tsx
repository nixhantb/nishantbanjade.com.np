// Responsive Nav Component
import { FC } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import UserProfileNavMobileView from "./UserProfileNavMobileView";
import UserProfileNavDesktopView from "./UserProfileNavDesktopView";

const UserProfileNav: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? <UserProfileNavMobileView /> : <UserProfileNavDesktopView />}
    </>
  );
};

export default UserProfileNav;
