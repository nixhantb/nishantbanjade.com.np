import React, { FC, useEffect, useRef, useState } from "react";
import {
  TerminalWelcomeMessages,
  TerminalUserName,
  TerminalPrompt,
} from "../../assets/styles/terminal/terminalstyle";
import { Colors } from "../../assets/styles/basetheme/theme";
import { commands } from "./CommandUtility";
import TerminalOutput from "./TerminalOutput";
import TerminalConfiguration from "../../assets/config/developer_data/terminalconfiguration";
type Command = {
  command: string;
  response: string | string[];
};

const customInputStyle = {
  backgroundColor: "transparent",
  color: Colors.textBlack,
  fontFamily: "Courier New, monospace",
  fontSize: "1em",
  fontWeight: "600",
  width: "60%",
  marginLeft: "6px",
  outline: "none",
  border: "none",
  caretColor: Colors.textBlack,
};

const TerminalLogic: FC = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<Command[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {welcome_message, terminal_username} = TerminalConfiguration;
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [output]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  const handleCommand = (command: string) => {
    if (command.toLowerCase() === "clear") {
      setOutput([]);
      setInput("");
    } else {
      const response = commands[command.toLowerCase()] || "Command not found";
      setOutput([...output, { command, response }]);
      setInput("");
    }
  };

  return (
    <>
      <TerminalWelcomeMessages>
       {welcome_message}
      </TerminalWelcomeMessages>

      {output.map((item, index) => (
        <TerminalOutput
          key={index}
          command={item.command}
          response={item.response}
        />
      ))}
      <TerminalPrompt>
        <TerminalUserName>
          {terminal_username}
          <input
            type="text"
            value={input}
            autoFocus
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            ref={inputRef}
            style={customInputStyle}
          />
        </TerminalUserName>
      </TerminalPrompt>
    </>
  );
};

export default TerminalLogic;
