import { useEffect } from "react";
import UserProfileNav from "./component/UserProfileNav/UserProfileNav";
import HeroBodyWithHeroImageAssociation from "./component/herobodyWithTypeWriterEffect/herobody/herobodyWithHeroImageAssociation";
import TerminalContainer from "./component/terminal/TerminalContainer";
import AboutUser from "./component/about/AboutUser";
import Experience from "./component/experience/Experience";


function App() {
  useEffect(() => {
    document.title = "Software Engineer I | Nishant Banjade";
  }, []);
  return (
    <>
      <UserProfileNav />
      <HeroBodyWithHeroImageAssociation />
      <TerminalContainer/>
      <AboutUser/>
      <Experience/>
    </>
  );
}

export default App;
