import { useEffect } from "react";
import UserProfileNav from "./component/UserProfileNav/UserProfileNav";
import HeroBodyWithHeroImageAssociation from "./component/herobodyWithTypeWriterEffect/herobody/herobodyWithHeroImageAssociation";
import Terminal from "./component/terminal/Terminal";

function App() {
  useEffect(() => {
    document.title = "Software Engineer | Nishant Banjade";
  }, []);
  return (
    <>
      <UserProfileNav />
      <HeroBodyWithHeroImageAssociation />
      <Terminal/>
    </>
  );
}

export default App;
