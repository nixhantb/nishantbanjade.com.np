import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import myWorkExperience from "../../assets/config/developer_data/experienceData";
import { Colors } from "../../assets/styles/basetheme/theme";

type ExperienceKey = keyof typeof myWorkExperience;

export default function ExperienceItemCard() {
  return (
    <>
      {(Object.keys(myWorkExperience) as ExperienceKey[]).map(
        (experienceKey, index) => {
          const {
            companyDesignation,
            experienceDate,
            experienceDescription,
            responsibility,
            skills,
          } = myWorkExperience[experienceKey];
          return (
            <Card key={index} sx={{ margin: "2%", height: "auto" }}>
              <CardHeader
                avatar={
                  <WorkspacePremiumIcon
                    sx={{ fontSize: "3em", color: "purple" }}
                  />
                }
                title={companyDesignation}
                subheader={experienceDate}
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {experienceDescription}
                </Typography>
              </CardContent>
              <CardActions disableSpacing></CardActions>

              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel-${experienceKey}-responsibilities-content`}
                    id={`panel-${experienceKey}-responsibilities-header`}
                    color="text.secondary"
                  >
                    <Typography>Responsibilities</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{ fontSize: "0.9em", color: Colors.primary }}
                    >
                      {responsibility}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel-${experienceKey}-skills-content`}
                    id={`panel-${experienceKey}-skills-header`}
                    color="text.secondary"
                  >
                    <Typography>Tech stacks</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{ fontSize: "0.8em", color: Colors.primary }}
                    >
                      {skills}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Card>
          );
        }
      )}
    </>
  );
}
