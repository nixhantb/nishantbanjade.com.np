import {
  ContainerDiv,
  TermContainer,
} from "../../assets/styles/terminal/terminalstyle";
import TermNav from "./TermNav";
import TerminalLogic from "./TerminalLogic";

function Terminal() {
  return (
    <>
      <ContainerDiv>
        <TermContainer>
          <TermNav />
          <TerminalLogic />
        </TermContainer>
      </ContainerDiv>
    </>
  );
}

export default Terminal;
