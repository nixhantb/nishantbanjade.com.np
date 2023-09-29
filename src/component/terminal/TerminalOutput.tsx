import { FC } from "react";
import {
  TerminalPrompt,
  TerminalUserName,
  TerminalOutput as TerminalOutputStyle,
} from "../../assets/styles/terminal/terminalstyle";

type TerminalOutputProps = {
  command: string;
  response: string | string[];
};

const TerminalOutput: FC<TerminalOutputProps> = ({ command, response }) => (
  <div>
    <TerminalPrompt>
      <TerminalUserName>
        [Nix-term~ ]{" "}
        <span style={{ color: "black", fontWeight: "600" }}>{command}</span>
      </TerminalUserName>
    </TerminalPrompt>
    <TerminalOutputStyle dangerouslySetInnerHTML={{ __html: response }} />
  </div>
);

export default TerminalOutput;
