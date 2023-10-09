import { FC } from "react";
import {
  ContainerDiv,
  TermContainer,
} from "../../assets/styles/terminal/terminalstyle";
import TermNav from "./TermNav";
import TerminalLogic from "./TerminalLogic";

const TerminalContainer: FC = () => {
  return (
    <>
    <div id = "terminal">
      <ContainerDiv>
        <TermContainer>
          <TermNav />
          <TerminalLogic />
        </TermContainer>
      </ContainerDiv>
    </div>
    </>
  );
};

export default TerminalContainer;
