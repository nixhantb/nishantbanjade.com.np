
import { AboutSkillsContainer, SkillsButton } from '../../assets/styles/about/Aboutstyles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


interface Props {
    skillsArrayDesktop: string[]
    skillsArrayMobile: string[]
}
const SkillsTag = ({skillsArrayDesktop, skillsArrayMobile}: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const skillsToDisplay = isMobile ? skillsArrayMobile : skillsArrayDesktop;

  return (
    <AboutSkillsContainer>
      {skillsToDisplay.map((skill, index) => (
        <SkillsButton key={index}>{skill}</SkillsButton>
      ))}
    </AboutSkillsContainer>
  );
};

export default SkillsTag;
