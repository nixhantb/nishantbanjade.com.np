import {
  ContactContainer,
  ContactIconsContainer,
  ContentTitle,
} from "../../assets/styles/footer/contact";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WebIcon from "@mui/icons-material/Web";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Colors } from "../../assets/styles/basetheme/theme";
import { useMediaQuery } from "@mui/material";
export default function Contact() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const iconStyle = {
    fontSize: "42px",
    marginRight: "15px",
    marginBottom: "30px",
    cursor: "pointer",
    borderRadius: "50%",
    color: "white",
    transition: "0.4s ease-out",
    "&:hover": {
      color: Colors.primary,
    },
  };
  if (isSmallScreen) {
    iconStyle.fontSize = "32px";
  } else if (isMediumScreen) {
    iconStyle.fontSize = "39px";
  }

  return (
    <ContactContainer>
      <ContentTitle>Connect With Me</ContentTitle>
      <ContactIconsContainer>
        <a
          href="https://github.com/Nix-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={iconStyle} />
        </a>

        <a
          href="https://www.linkedin.com/in/nbanjade/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={iconStyle} />
        </a>

        <a
          href="https://twitter.com/NishantBanjade1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon sx={iconStyle} />
        </a>

        <a
          href="https://blog.nishantbanjade.com.np/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WebIcon sx={iconStyle} />
        </a>
      </ContactIconsContainer>
    </ContactContainer>
  );
}
