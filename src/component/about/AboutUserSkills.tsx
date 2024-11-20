
import { FC } from 'react';
import { AboutSkillsContainer, SkillsButton } from '../../assets/styles/about/Aboutstyles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const skillsArrayDesktop = [
  'C#/.Net',
  'D365',
  'JavaScript',
  'TypeScript',
  'Tailwind',
  'MUI',
  'ReactJs',
  'SQL',
  'JIRA',
  'Git',
  'RabbitMQ',
  'Docker',
  'AWS'
];

const skillsArrayMobile = [
  'C#',
  'D365',
  'JS',
  'TS',
  'Twind',
  'MUI',
  'React',
  '.Net',
  'SQL',
  'JIRA',
  'Git',
  'Rabbit',
  'Docker',
  'AWS'
];

const AboutUserSkills: FC = () => {
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

export default AboutUserSkills;
