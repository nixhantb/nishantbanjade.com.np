import { useEffect } from "react";
import UserProfileNav from "./component/UserProfileNav/UserProfileNav";
import HeroBodyWithHeroImageAssociation from "./component/herobodyWithTypeWriterEffect/herobody/herobodyWithHeroImageAssociation";

function App() {
  useEffect(() => {
    document.title = "Software Engineer | Nishant Banjade";
  }, []);
  return (
    <>
      <UserProfileNav />
      <HeroBodyWithHeroImageAssociation />
    </>
  );
}

export default App;
