import { useEffect } from "react";
import UserProfileNav from "./component/UserProfileNav/UserProfileNav";
import HeroBodyWithHeroImageAssociation from "./component/herobodyWithTypeWriterEffect/herobody/herobodyWithHeroImageAssociation";
import TerminalContainer from "./component/terminal/Terminal";


function App() {
  useEffect(() => {
    document.title = "Software Engineer | Nishant Banjade";
  }, []);
  return (
    <>
      <UserProfileNav />
      <HeroBodyWithHeroImageAssociation />
      <TerminalContainer/>
    </>
  );
}

export default App;
