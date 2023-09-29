import { render } from "@testing-library/react";
import Terminal from "../../component/terminal/Terminal";

test("Renders the terminal page", () => {
  render(<Terminal />);
  expect(true).toBeTruthy();
});
