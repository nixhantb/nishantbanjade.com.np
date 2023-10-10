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
  const terminalContainerRef = useRef<HTMLDivElement | null>(null);
  const {welcome_message, terminal_username} = TerminalConfiguration;
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
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
   <div ref={terminalContainerRef} style={{ maxHeight: "376px", overflowY: "auto" }}>

     <TerminalWelcomeMessages>
       {welcome_message}
      </TerminalWelcomeMessages>

      {output.map((item, index) => (
        <TerminalOutput
          key={index}
          command={item.command}
          response={item.response}
          data-testid = "terminal-output"
        />
      ))}
      <TerminalPrompt>
        <TerminalUserName>
          {terminal_username}
          <input
            type="text"
            aria-label="input-form"
            value={input}
            autoFocus
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            ref={inputRef}
            style={customInputStyle}
            data-testid="terminal-input"
          />
        </TerminalUserName>
      </TerminalPrompt>
    </div>
    </>
  );
};

export default TerminalLogic;
