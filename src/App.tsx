import { useEffect } from "react";
// import UserProfileNavDesktopView from "./component/UserProfileNav/UserProfileNavDesktopView";
import UserProfileNav from "./component/UserProfileNav/UserProfileNav";

function App() {

  useEffect(() => {
      document.title = "Software Engineer | Nishant Banjade"
  },[])
  return (
      <UserProfileNav/>
  );
}

export default App;
