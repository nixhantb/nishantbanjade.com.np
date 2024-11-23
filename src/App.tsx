import { useEffect } from "react";
import UserProfileNav from "./component/UserProfileNav/UserProfileNav";
import HeroBodyWithHeroImageAssociation from "./component/herobodyWithTypeWriterEffect/herobody/herobodyWithHeroImageAssociation";
import TerminalContainer from "./component/terminal/TerminalContainer";
import AboutUser from "./component/about/AboutUser";
import Experience from "./component/experience/Experience";
import Footer from "./component/footer/Footer";
import Projects from "./component/projects/Projects";
function App() {
  useEffect(() => {
    document.title = "Software Engineer I | Nishant Banjade";
  }, []);
  return (
    <>
      <UserProfileNav />
      <HeroBodyWithHeroImageAssociation/>
      <AboutUser/>
      <Experience/>
      <Projects title="Projects"/>
      <TerminalContainer/>
      <Footer/>
    </>
  );
}

export default App;
