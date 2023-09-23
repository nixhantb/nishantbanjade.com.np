import { FC } from "react";
import {
  HeroBodyContainer,
  HeroBodyDescriptionContainer,
  HeroBodyImage,
  HeroTypeWriterContainer,
} from "../../../assets/styles/herobody/herobodystyle";
import BgImage from "../../../assets/images/hero-background-representational-image.png";
import TypeWriterEffect from "../TypeWriterEffect";
import customizedDevData from "../../../assets/config/developer_data/customizedev";
const HeroBodyWithHeroImageAssociation: FC = () => {
  const { developer_quote, herobody_img_description } = customizedDevData;
  return (
    <HeroBodyContainer>
      <HeroBodyImage src={BgImage} alt={herobody_img_description} />
      <HeroBodyDescriptionContainer>
        <HeroTypeWriterContainer>
          <TypeWriterEffect fullText={developer_quote} />
        </HeroTypeWriterContainer>
      </HeroBodyDescriptionContainer>
    </HeroBodyContainer>
  );
};

export default HeroBodyWithHeroImageAssociation;
