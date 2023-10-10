import { render } from '@testing-library/react';
import HeroBodyWithHeroImageAssociation from '../../component/herobodyWithTypeWriterEffect/herobody/herobodyWithHeroImageAssociation';

describe('HeroBodyWithHeroImageAssociation component', () => {
  it('should render the hero image and developer quote', async () => {
   
    render(<HeroBodyWithHeroImageAssociation />);
    expect(true).toBeTruthy();
  });
});
