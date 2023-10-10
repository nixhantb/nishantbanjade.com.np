import { render } from "@testing-library/react";
import TerminalOutput from "../../component/terminal/TerminalOutput";

describe("TerminalOutput renders correctly", () => {
  test("renders TerminalOutput component with command and response", () => {
    const command = "test command";
    const response = "test response";
    const { getByText } = render(
      <TerminalOutput command={command} response={response} />
    );
    const commandElement = getByText(`[Nix-term:~$]`);
    const responseElement = getByText(response);
    expect(commandElement).toBeTruthy();
    expect(responseElement).toBeTruthy();
  });
});
