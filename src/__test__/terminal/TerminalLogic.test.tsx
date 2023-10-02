import {fireEvent, render, screen} from "@testing-library/react";

import TerminalLogic from "../../component/terminal/TerminalLogic";

describe("Render terminal logic ", () => {
    test("renders the welcome message", () => {

        render(<TerminalLogic/>);
        const welcomeMessage = screen.getByText("Type 'help' to get started !");
        expect(welcomeMessage).toBeTruthy();
    });

    test("handles input change correctly", async () => {
        const {getByTestId} = render(<TerminalLogic/>);
        const input = getByTestId("terminal-input") as HTMLInputElement;
        fireEvent.change(input, {target: {value: "test command"}});
        expect(input.value).toBe("test command");

    });

    // check the clear command
    test("handle 'clear' command correctly", () => {

        const {getByTestId, queryAllByTestId} = render(<TerminalLogic/>);
        
        const input = getByTestId("terminal-input") as HTMLInputElement;
        fireEvent.change(input, {target: {value: "clear"}});
        fireEvent.keyPress(input, {key: "Enter"});
        const outputItems = queryAllByTestId("terminal-output");
        expect(outputItems.length).toBe(0);
    });

    // check that the input element  is focused initially

    test("focuses input element when output changes", () => {
        const {getByTestId} = render(<TerminalLogic/>);
        const input = getByTestId("terminal-input");

        // check that the input element is focused initially
        expect(document.activeElement).toStrictEqual(input);
        
        // simulate a change in output

        render(<TerminalLogic/>, {container: document.body});

        // Check that the input element is focused after the output changes
        expect(document.activeElement).toStrictEqual(input);
    })

});