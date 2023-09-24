import TypeWriterEffect from "../../component/herobodyWithTypeWriterEffect/typewriter/TypeWriterEffect";
import { render, screen, waitFor } from "@testing-library/react";

describe("TypeWriterEffect component", () => {
  it("should type out the full text", async () => {
    const fullText = "Hello world";

    render(<TypeWriterEffect fullText={fullText} />);

    // Wait for the typing effect to finish.
    await waitFor(() => {
      expect(screen.getByText(fullText)).toBeTruthy();
    });
  });

  it("should display null for null text", async () => {
    const NullText = "";
    render(<TypeWriterEffect fullText={NullText} />);
    await waitFor(() => {
      expect(screen.queryByText(NullText.length)).toBeNull();
    });
  });
  
  it("should type out a long text", async () => {
    const longText = "This is a very long text that should be typed out.";

    render(<TypeWriterEffect fullText={longText} />);

    await waitFor(() => {
      expect(screen.getByText(longText)).toBeTruthy();
    }, { timeout: 10000 }); // Adjust the timeout as needed for very long text.
  });
});
