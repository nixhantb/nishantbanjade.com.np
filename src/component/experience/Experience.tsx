import {
  ExperienceContainer,
  ExperienceItemContainer,
  ExperienceTitle,
} from "../../assets/styles/experience/Experience";
import ExperienceItemCard from "./ExperienceItem";
import ComputerIcon from "@mui/icons-material/Computer";

export default function () {
  return (
    <>
      <ExperienceContainer>
        <ExperienceTitle>
          Work Experience
          <ComputerIcon
            sx={{
              fontSize: "1em",
              verticalAlign: "middle",
              marginLeft: "0.5em",
              marginBottom: "0.4%",
              color: "purple",
              display: { xs: "none", sm: "inline" },
            }}
          />{" "}
        </ExperienceTitle>

        <ExperienceItemContainer>
          <ExperienceItemCard />
        
        </ExperienceItemContainer>
      </ExperienceContainer>
    </>
  );
}
