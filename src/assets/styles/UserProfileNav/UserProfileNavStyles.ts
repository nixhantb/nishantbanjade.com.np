import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { List } from "@mui/material";
import { Colors } from "../basetheme/theme";
import "@fontsource/montserrat";

interface ListNavBarContainerProps {
  types: "row" | "block";
}
// custom styling for the navbar container
// try border property to see the container's border : border: '1px solid black'
export const NavBarContainer = styled(Box)(() => ({
  padding: "0 0.6em",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  color: Colors.textBlack,
  boxShadow: `5px 5px 5px ${Colors.backgroundDarkGray}`,
}));

// Nav header styling. Feel free to use logo for specific need
export const NavBarHeaderTitle = styled(Box)({
  marginLeft: "2em",
});
// Nav Header Button style
export const PrimaryHeaderButtonStyle = {
  color: Colors.textBlack,
  transition: "0.7s",
  "&:hover": {
    color: Colors.accentOrange,
    background: "transparent",
  },
};

// Container for the Nav Items . types props helps adjust between mobile and desktop view
export const ListNavItemContainer = styled(List)<ListNavBarContainerProps>(
  (props) => ({
    display: props.types === "row" ? "flex" : "block",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 1em",
  })
);

// Individual List Item styles with thin line animation when hover
export const ListItemButtonStyle = {
  justifyContent: "center",
  transition: "0.7s",

  "&::after": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: "0",
    background: "transparent",
    transform: "scaleX(0)",
    transformOrigin: "center",
    transition: "transform 0.3s ease-in-out",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    background: Colors.textBlack,
  },
  "&:hover": {
    color: Colors.accentOrange,
    background: "transparent",
  },
};

// Custom styles for texts and Buttons
// custom styles for the ListItems
export const textStyleListItemText = {
  textAlign: "center",
  textTransform: "uppercase",
};
// Primary Typography styles for ListItems
export const primaryTypographyStyle = {
  fontSize: "14px",
  fontFamily: "'Montserrat', 'sans-serif'",
  fontWeight: "600",
};

// Typography customizations for the Header style
export const primaryTypographyHeaderStyle = {
  fontSize: "20px",
  fontWeight: "600",
};
