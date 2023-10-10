
import { FC } from 'react';
import { AboutSkillsContainer, SkillsButton } from '../../assets/styles/about/Aboutstyles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const skillsArrayDesktop = [
  'JavaScript',
  'TypeScript',
  'MUI',
  'HTML',
  'CSS',
  'C#',
  'Java',
  'ReactJs',
  'DotNet',
  'SQL',
  'MongoDB',
  'JIRA',
  'Git',
  'Postman',
  'RabbitMQ',
  'vim',
  'Docker',
  'AWS'
];

const skillsArrayMobile = [
  'JS',
  'TS',
  'MUI',
  'HTML',
  'CSS',
  'C#',
  'Java',
  'React',
  '.Net',
  'SQL',
  'Mongo',
  'JIRA',
  'Git',
  'Postman',
  'Rabbit',
  'vim',
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
