import { FC } from "react";
import {
  TerminalPrompt,
  TerminalUserName,
  TerminalOutput as TerminalOutputStyle,
} from "../../assets/styles/terminal/terminalstyle";
import TerminalConfiguration from "../../assets/config/developer_data/terminalconfiguration";
type TerminalOutputProps = {
  command: string;
  response: string | string[];
};
const {terminal_username} = TerminalConfiguration;
const TerminalOutput: FC<TerminalOutputProps> = ({ command, response }) => (
  <div>
    <TerminalPrompt>
      <TerminalUserName>
        {terminal_username}{" "}
        <span style={{ color: "black", fontWeight: "600" }}>{command}</span>
      </TerminalUserName>
    </TerminalPrompt>
    <TerminalOutputStyle dangerouslySetInnerHTML={{ __html: response }} />
  </div>
);

export default TerminalOutput;
