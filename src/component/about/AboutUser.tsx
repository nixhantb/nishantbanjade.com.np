import {
  AboutBodyContainer,
  AboutBodyImage,
  AboutContent,
  AboutDescription,
  AboutTitle,
} from "../../assets/styles/about/Aboutstyles";
import RepresentationalImage from "../../assets/images/Nishant Banjade.png";
import developerData from "../../assets/config/developer_data/customizedev";
const AboutUser = () => {
    const {about_title_name, about_description} = developerData;
  return (
    <AboutBodyContainer>
      <AboutBodyImage src={RepresentationalImage} />
      <AboutContent>
        <AboutTitle>{about_title_name}</AboutTitle>
        <AboutDescription>
          {about_description}
        </AboutDescription>
      </AboutContent>
      
    </AboutBodyContainer>
  );
};
export default AboutUser;
