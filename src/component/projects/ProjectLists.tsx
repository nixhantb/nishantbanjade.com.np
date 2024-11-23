import { Typography, Button, Card, CardContent, CardActions, CardMedia } from "@mui/material";
import SkillsTag from "./SkillsTag";

interface ProjectProps {
  src: string;
  header: string;
  description: string;
  visit: string;
  learn: string;
  skillsDesktop: string[];
  skillsMobile: string[];
}

export default function ProjectLists({
  src,
  header,
  description,
  visit,
  learn,
  skillsDesktop,
  skillsMobile,
}: ProjectProps) {
  return (
    <a href={visit} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 450, cursor: "pointer", ":hover": { boxShadow: 6 } }}>
        <CardMedia sx={{ height: 130 }} image={src} title={header} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {header}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>

        <SkillsTag skillsArrayDesktop={skillsDesktop} skillsArrayMobile={skillsMobile} />

        <CardActions>
          <Button href={learn} target="_blank" rel="noopener noreferrer">
            Source Code
          </Button>
        </CardActions>
      </Card>
    </a>
  );
}
